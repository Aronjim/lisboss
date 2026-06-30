(function() {
  function initLisbos() {
    if (!document.getElementById('lcProductsGrid')) return;

    var lcProducts = [  
      { id: 1, name: "Pure Tablea Unsweetened — 110g", cat: "tablea", price: 140, img: "https://lisboscacao.com/wp-content/uploads/2020/09/1-2-300x300.webp", tag: "Bestseller", tagType: "lc-best" },
      { id: 2, name: "Pure Tablea Unsweetened — 250g", cat: "tablea", price: 340, img: "https://lisboscacao.com/wp-content/uploads/2020/09/2-300x300.webp" },
      { id: 3, name: "Pure Tablea Unsweetened — 500g", cat: "tablea", price: 630, img: "https://lisboscacao.com/wp-content/uploads/2024/07/3-300x300.webp", tag: "Vacuum-Packed", tagType: "lc-gold" },
      { id: 4, name: "Pure Tablea Unsweetened — 1kg Tub", cat: "tablea", price: 1250, img: "https://lisboscacao.com/wp-content/uploads/2020/09/4-300x300.webp" },
      { id: 5, name: "70% Dark Chocolate with Coconut Sugar", cat: "chocolate", price: 150, img: "https://lisboscacao.com/wp-content/uploads/2026/04/18-300x300.webp", tag: "New", tagType: "lc-new" },
      { id: 6, name: "Sweetened Tableya with Coco Sugar — 110g", cat: "tablea", price: 190, img: "https://lisboscacao.com/wp-content/uploads/2023/04/17-300x300.webp" },
      { id: 7, name: "Mocha Tableya — 110g", cat: "tablea", price: 190, img: "https://lisboscacao.com/wp-content/uploads/2023/04/Mocha-Tableya-300x300.webp" },
      { id: 8, name: "Pistachio Kunafah Chocolate Bar — 80g", cat: "chocolate", price: 230, img: "https://lisboscacao.com/wp-content/uploads/2025/09/2-300x300.webp", tag: "New", tagType: "lc-new" },
      { id: 9, name: "Coconut Choco Knots — 100g", cat: "snacks", price: 190, img: "https://lisboscacao.com/wp-content/uploads/2025/09/3-300x300.webp" },
      { id: 10, name: "Yema Tableya Chocolate Spread", cat: "snacks", price: 160, img: "https://lisboscacao.com/wp-content/uploads/2024/07/13-300x300.webp", priceFrom: true },
      { id: 11, name: "Hot Cocoa Mix", cat: "tablea", price: 30, img: "https://lisboscacao.com/wp-content/uploads/2025/09/1-300x300.webp", priceFrom: true },
      { id: 12, name: "Hot Chocolate Stir-in — 40g", cat: "tablea", price: 85, img: "https://lisboscacao.com/wp-content/uploads/2023/04/15-300x300.webp" },
      { id: 13, name: "Cacao Mint Tea", cat: "snacks", price: 120, img: "https://lisboscacao.com/wp-content/uploads/2024/07/12-300x300.webp" },
      { id: 14, name: "Roasted Unsweetened Cacao Nibs — 130g", cat: "snacks", price: 160, img: "https://lisboscacao.com/wp-content/uploads/2020/09/6-300x300.webp" },
      { id: 15, name: "Candied Cacao Nibs — 95g", cat: "snacks", price: 150, img: "https://lisboscacao.com/wp-content/uploads/2021/03/5-300x300.webp" },
      { id: 16, name: "Trail Mix with Candied Cacao Nibs", cat: "snacks", price: 140, img: "https://lisboscacao.com/wp-content/uploads/2022/07/9-300x300.webp", priceFrom: true },
      { id: 17, name: "Waffle Cornets with Chocolate Filling — 120g", cat: "snacks", price: 185, img: "https://lisboscacao.com/wp-content/uploads/2024/07/11-300x300.webp" },
      { id: 18, name: "Hardwood Batirol — Per Piece", cat: "tools", price: 300, img: "https://lisboscacao.com/wp-content/uploads/2020/08/6-2-300x300.png" },
      { id: 19, name: "Tsokolatera & Batirol Set — Medium", cat: "tools", price: 1000, img: "https://lisboscacao.com/wp-content/uploads/2021/05/Medium-Tsokolatera-Batirol-Set-300x300.png" },
      { id: 20, name: "Tsokolatera & Batirol Set — Large", cat: "tools", price: 1100, img: "https://lisboscacao.com/wp-content/uploads/2021/05/Large-Tsokolatera-Batirol-Set-300x300.png" }
    ];

    var lcFaqs = [
      { q: "What are your flagship products?", a: "Our bestsellers are 100% Pure Unsweetened Tablea and Unsweetened Roasted Cacao Nibs. We've also expanded into dark chocolate bars, yema spread, hot cocoa mix, and traditional tsokolatera-batirol sets." },
      { q: "Where are you located?", a: "We're based in our humble town of Bacuag, Surigao del Norte — on the northern tip of Mindanao, where the cacao trees thrive year-round." },
      { q: "Do you ship nationwide? How long does delivery take?", a: "Yes — we ship to all 81 provinces via LBC. Metro Manila and major cities usually receive in 3–5 business days; remote areas 5–7 days. We do weekly shipment runs to keep things fresh." },
      { q: "What payment options do you accept?", a: "We accept GCash, Maya, bank transfer (BDO, BPI), Cash on Delivery (COD), and Cash on Pickup. Major credit cards via PayMongo coming soon." },
      { q: "Do you offer wholesale or reseller pricing?", a: "Opo! We offer wholesale pricing for orders of 10 units or more per product. Resellers and distributors nationwide are welcome — message us via Facebook or email for the wholesale price list." },
      { q: "How is Pure Tablea different from cocoa powder?", a: "Both come from the cacao bean, but pure tablea is less processed — it retains more of the natural antioxidants, fiber, and healthy fats. Cocoa powder is more processed and often has added sugar. Tablea has nothing but cacao." },
      { q: "What can I do with Pure Tablea?", a: "The classics: hot sikwate (tsokolate), champorado, and baked goods. Modern uses: tablea smoothies, mole sauces, tablea-rubbed chicken adobo, and dark chocolate frosting. One tablea per cup of hot water is the rule of lola." }
    ];

    var lcGrid = document.getElementById('lcProductsGrid');
    function lcCatLabel(cat) {
      var map = { tablea: 'Pure Tablea', chocolate: 'Chocolate', snacks: 'Snacks & Spreads', tools: 'Tools & Sets' };
      return map[cat] || '';
    }
    function lcRenderProducts(cat) {
      cat = cat || 'all';
      var list = cat === 'all' ? lcProducts : lcProducts.filter(function(p) { return p.cat === cat; });
      lcGrid.innerHTML = list.map(function(p) {
        return '<article class="lc-product-card">' +
          '<div class="lc-product-img">' +
            (p.tag ? '<span class="lc-product-tag ' + (p.tagType || '') + '">' + p.tag + '</span>' : '') +
            '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" onerror="this.style.display=\'none\'" />' +
          '</div>' +
          '<div class="lc-product-body">' +
            '<div class="lc-product-cat">' + lcCatLabel(p.cat) + '</div>' +
            '<h3 class="lc-product-title">' + p.name + '</h3>' +
            '<div class="lc-product-foot">' +
              '<div class="lc-product-price">' + (p.priceFrom ? '<span class="lc-from">from</span>' : '') + '₱' + p.price.toLocaleString() + '</div>' +
              '<button class="lc-add-btn" onclick="lcAddToCart(' + p.id + ')" aria-label="Add to cart">' +
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</article>';
      }).join('');
    }
    lcRenderProducts();

    var filters = document.querySelectorAll('#lcFilters .lc-chip');
    filters.forEach(function(chip) {
      chip.onclick = function() {
        filters.forEach(function(c) { c.classList.remove('lc-active'); });
        this.classList.add('lc-active');
        lcRenderProducts(this.dataset.cat);
      };
    });

    var lcFaqList = document.getElementById('lcFaqList');
    lcFaqList.innerHTML = lcFaqs.map(function(f, i) {
      return '<div class="lc-faq-item" data-idx="' + i + '">' +
        '<button class="lc-faq-q">' + f.q +
          '<span class="lc-faq-q-icon">' +
            '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>' +
          '</span>' +
        '</button>' +
        '<div class="lc-faq-a">' + f.a + '</div>' +
      '</div>';
    }).join('');
    lcFaqList.querySelectorAll('.lc-faq-item').forEach(function(item) {
      item.querySelector('.lc-faq-q').onclick = function() { item.classList.toggle('lc-open'); };
    });

    var lcCart = [];
    window.lcAddToCart = function(id) {
      var p = lcProducts.find(function(x) { return x.id === id; });
      if (!p) return;
      var existing = lcCart.find(function(x) { return x.id === id; });
      if (existing) existing.qty++;
      else lcCart.push(Object.assign({}, p, { qty: 1 }));
      lcRenderCart();
      lcShowToast(p.name + ' added to cart');
    };
    window.lcRemoveFromCart = function(id) {
      lcCart = lcCart.filter(function(x) { return x.id !== id; });
      lcRenderCart();
    };
    window.lcChangeQty = function(id, delta) {
      var item = lcCart.find(function(x) { return x.id === id; });
      if (!item) return;
      item.qty = Math.max(1, item.qty + delta);
      lcRenderCart();
    };
    function lcRenderCart() {
      var items = document.getElementById('lcCartItems');
      var foot = document.getElementById('lcCartFoot');
      var count = document.getElementById('lcCartCount');
      var totalQty = lcCart.reduce(function(s, x) { return s + x.qty; }, 0);
      count.textContent = totalQty;
      count.classList.toggle('lc-hidden', totalQty === 0);
      if (lcCart.length === 0) {
        items.innerHTML =
          '<div class="lc-cart-empty">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' +
            '<p>Your cart is empty.<br>Let\'s fix that.</p>' +
            '<a href="#shop" class="lc-btn lc-btn-primary" onclick="lcCloseCart()">Browse Products</a>' +
            '</div>';
        foot.style.display = 'none';
        return;
      }
      window.lcBrowseProducts = function () {
        lcCloseCart();

        setTimeout(function () {
          document.getElementById("shop").scrollIntoView({
            behavior: "smooth"
         });
        }, 300);
       };
      items.innerHTML = lcCart.map(function(it) {
        return '<div class="lc-cart-item">' +
          '<div class="lc-cart-item-img"><img src="' + it.img + '" alt="" onerror="this.style.display=\'none\'" /></div>' +
          '<div class="lc-cart-item-info">' +
            '<h5>' + it.name + '</h5>' +
            '<div class="lc-qty-row">' +
              '<button onclick="lcChangeQty(' + it.id + ', -1)">−</button>' +
              '<span>' + it.qty + '</span>' +
              '<button onclick="lcChangeQty(' + it.id + ', 1)">+</button>' +
            '</div>' +
          '</div>' +
          '<div class="lc-cart-item-end">' +
            '<div class="lc-cart-item-price">₱' + (it.price * it.qty).toLocaleString() + '</div>' +
            '<button class="lc-remove-btn" onclick="lcRemoveFromCart(' + it.id + ')">Remove</button>' +
          '</div>' +
        '</div>';
      }).join('');
      foot.style.display = 'block';
      var subtotal = lcCart.reduce(function(s, x) { return s + x.price * x.qty; }, 0);
      document.getElementById('lcSubtotal').textContent = '₱' + subtotal.toLocaleString();
      document.getElementById('lcShipping').textContent = subtotal >= 2500 ? 'FREE' : 'Calculated at checkout';
      document.getElementById('lcTotal').textContent = '₱' + subtotal.toLocaleString();
    }
    window.lcOpenCart = function() {
      document.getElementById('lcCartDrawer').classList.add('lc-open');
      document.getElementById('lcCartOverlay').classList.add('lc-open');
    };
    window.lcCloseCart = function() {
      document.getElementById('lcCartDrawer').classList.remove('lc-open');
      document.getElementById('lcCartOverlay').classList.remove('lc-open');
    };
    window.lcCheckout = function () {
      lcCloseCart();
      document.getElementById("lcCheckoutModal").classList.add("lc-open");
    };
    window.lcCloseCheckout = function () {
     document.getElementById("lcCheckoutModal").classList.remove("lc-open");
   };

   document.getElementById("lcCheckoutForm").addEventListener("submit", function (e) {
     e.preventDefault();

     const name = document.getElementById("lcCustomerName").value.trim();
     const phone = document.getElementById("lcCustomerPhone").value.trim();
     const address = document.getElementById("lcCustomerAddress").value.trim();
     const payment = document.getElementById("lcPaymentMethod").value;
     const notes = document.getElementById("lcOrderNotes").value.trim();

     const items = lcCart.map(item =>
       `• ${item.name} x${item.qty} — ₱${(item.price * item.qty).toLocaleString()}`
     ).join("\n");

     const total = lcCart.reduce((sum, item) => sum + item.price * item.qty, 0);

     const orderNumber = "LC-" + Date.now();

     const summary =
   `🛒 NEW LISBOS CACAO ORDER

   Order #: ${orderNumber}

   Customer:
   ${name}

   Phone:
   ${phone}

   Delivery Address:
   ${address}

   Payment Method:
   ${payment}

   Items Ordered:
   ${items}

   Total:
   ₱${total.toLocaleString()}

   Notes:
   ${notes || "None"}`;

   const messengerUrl = `https://m.me/110536578438038?text=${encodeURIComponent(summary)}`;
   window.open(messengerUrl, "_blank");

     lcCloseCheckout();
     lcCloseCart();
   });
    lcRenderCart();

    var lcToastTimer;
    function lcShowToast(text) {
      var t = document.getElementById('lcToast');
      document.getElementById('lcToastText').textContent = text;
      t.classList.add('lc-show');
      clearTimeout(lcToastTimer);
      lcToastTimer = setTimeout(function() { t.classList.remove('lc-show'); }, 2500);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLisbos);
  } else {
    initLisbos();
  }


})();

