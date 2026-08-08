/* Client-side cart backed by localStorage.
   NOTE: There is no live payment backend yet. Checkout submits an order enquiry
   (see checkout.html) rather than processing payment — swap in Supabase + a
   payment provider once credentials are supplied. */
window.AurumCart = (function(){
  var KEY = 'aurum_cart_v1';

  function read(){
    try{ return JSON.parse(localStorage.getItem(KEY)) || []; }catch(e){ return []; }
  }
  function write(items){ localStorage.setItem(KEY, JSON.stringify(items)); refreshBadge(); }

  function add(slug, optionLabel, price, qty){
    qty = qty || 1;
    var items = read();
    var existing = items.find(function(i){ return i.slug === slug && i.option === optionLabel; });
    if(existing){ existing.qty += qty; }
    else { items.push({ slug:slug, option:optionLabel, price:price, qty:qty }); }
    write(items);
  }
  function updateQty(index, qty){
    var items = read();
    if(items[index]){
      items[index].qty = Math.max(1, qty);
      write(items);
    }
  }
  function remove(index){
    var items = read();
    items.splice(index,1);
    write(items);
  }
  function clear(){ write([]); }
  function count(){ return read().reduce(function(sum,i){ return sum + i.qty; }, 0); }
  function subtotal(){ return read().reduce(function(sum,i){ return sum + (i.price * i.qty); }, 0); }
  function refreshBadge(){
    var el = document.getElementById('cartCount');
    if(el){ el.textContent = count(); }
  }

  return { read:read, add:add, updateQty:updateQty, remove:remove, clear:clear, count:count, subtotal:subtotal, refreshBadge:refreshBadge };
})();
