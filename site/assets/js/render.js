/* Shared render helpers for product & blog cards, used across index/shop/blog/product pages. */
window.AurumRender = (function(){
  var root = '';

  function productCard(p){
    var price = window.AURUM_minPrice(p);
    var badge = p.badge ? '<span class="badge">' + p.badge + '</span>' : '';
    return ''
      + '<a href="' + root + 'product.html?slug=' + p.slug + '" class="card product-card">'
      + '  <div class="product-media">' + badge + window.Aurum.vialSVG(initials(p.name)) + '</div>'
      + '  <div class="product-body">'
      + '    <span class="product-cat">' + window.AURUM_getCategoryLabel(p.category) + (p.form === 'Capsule' ? ' &middot; Capsule' : '') + '</span>'
      + '    <h3>' + p.name + '</h3>'
      + '    <p class="desc">' + p.shortDesc + '</p>'
      + '    <div class="product-foot">'
      + '      <div class="price"><span class="from">From</span>' + window.Aurum.formatPrice(price) + '</div>'
      + '      <span class="btn btn-outline btn-sm">View</span>'
      + '    </div>'
      + '  </div>'
      + '</a>';
  }

  function initials(name){
    var clean = name.replace(/\(.*?\)/g,'').trim();
    var words = clean.split(/[\s\/-]+/).filter(Boolean);
    if(words.length === 1){ return words[0].substring(0,4).toUpperCase(); }
    return words.slice(0,2).map(function(w){ return w[0]; }).join('').toUpperCase();
  }

  function productGrid(container, products){
    if(!container) return;
    container.innerHTML = products.map(productCard).join('');
  }

  function categoryTiles(container, categories){
    if(!container) return;
    container.innerHTML = categories.map(function(c){
      var n = window.AURUM_PRODUCTS.filter(function(p){ return p.category === c.key; }).length;
      return '<a href="' + root + 'shop.html?category=' + c.key + '" class="cat-tile">'
        + '<h3>' + c.label + '</h3><span>' + n + ' Products &rarr;</span></a>';
    }).join('');
  }

  function blogCard(post){
    return ''
      + '<a href="' + root + 'blog-post.html?slug=' + post.slug + '" class="card blog-card">'
      + '  <div class="product-media">' + window.Aurum.vialSVG(initials(post.title), {fill:'#8a7233'}) + '</div>'
      + '  <div class="product-body">'
      + '    <span class="blog-meta">' + post.category + ' &middot; ' + post.readTime + '</span>'
      + '    <h3>' + post.title + '</h3>'
      + '    <p class="desc">' + post.excerpt + '</p>'
      + '    <span class="btn btn-outline btn-sm" style="align-self:flex-start;margin-top:6px;">Read Article</span>'
      + '  </div>'
      + '</a>';
  }

  function blogGrid(container, posts){
    if(!container) return;
    container.innerHTML = posts.map(blogCard).join('');
  }

  return { productCard:productCard, productGrid:productGrid, categoryTiles:categoryTiles, blogCard:blogCard, blogGrid:blogGrid, initials:initials };
})();
