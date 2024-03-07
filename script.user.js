// ==UserScript==
// @name         暗之收藏家
// @version      2024-03-08
// @description  为光之收藏家添加暗色模式
// @author       琳珸@拉诺西亚
// @license	 0BSD
// @match        https://www.ffxivsc.cn/*
// @icon         https://www.ffxivsc.cn/images/icon_sc_logo.png
// @require      https://scriptcat.org/lib/513/2.0.0/ElementGetter.js
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...

    function black(){
        console.log("one brings the shadow")
        shadowBringer();
    };

    function shadowBringer(){
        console.log("one brings the shadow")
        setTimeout(() => {
            elmGetter.get('.navbar.navbar-expand.bg-light.navbar-light', document, 1333).then(div => {
				if (div) {
					div.style.backgroundColor = "#333";
				}
            });
			elmGetter.each('.nav-link.text-nowrap', document, div => { //navbar
				if (div) {
					div.addEventListener("click", black);
				}
            });
            elmGetter.get('body', document, 1333).then(div => {
				if (div) {
					div.style.backgroundColor = "#333";
				}
            });
            elmGetter.get('.glamourContainer', document, 1333).then(div => {
                if (div) {
					div.style.backgroundColor = "#333";
				}
            });
            elmGetter.get('.glamourRoot', document, 1333).then(div => {
                //console.log(div);

                if (div) {
					div.style.color = "#FFF";
				}
            });
            elmGetter.each('.glamourDetailArmorItem', document, div => {
				if (div) {
                    console.log(div);
                    div.style.color = "#FFF";
                    div.style.backgroundColor = "#333";
				}
            });

            elmGetter.each('.card', document, div => {
				if (div) {
                    div.style.border = "1px solid rgb(39, 39, 39)";
				}
            });

            elmGetter.each('.card-body', document, div => {
				if (div) {
                    console.log(div);
                    div.style.backgroundColor = "#333";
				}
            });

			elmGetter.get('.mdui-loaded', document.body.children.namedItem('container').contentDocument,1333).then(div => {
				if (div) {
					//console.log(div.children);
					div.style.backgroundColor = "#333";
					div.style.color = "#fff";
					let elm = div.querySelector('.sticky-top.py-3.bg-white');
					//console.log(elm);
					elm.style.backgroundColor = "#333";
					elm.className = "sticky-top py-3";
					let elm2 = div.querySelector('.btn.btn-light');
					//console.log(elm2);
					elm2.style.backgroundColor = "#222";
					elm2.className = "btn";
				}

			});
            elmGetter.each('.flex-grow-1.text-center', document.body.children.namedItem('container').contentDocument, div => {
				if (div) {
                    console.log(div.children);
                    div.style.backgroundColor = "#333";
                    if (div.children) {
                        div.children[0].style.backgroundColor = "#333";
                    }
				}
            });
            elmGetter.each('.mdui-select-menu', document.body.children.namedItem('container').contentDocument, div => {
				if (div) {
                    div.style.backgroundColor = "#333";
                    div.style.Color = "#FFF";
				}
            });
            elmGetter.each('.mdui-select.mdui-select-position-bottom.mdui-select-open', document.body.children.namedItem('container').contentDocument, div => {
				if (div) {
                    div.style.backgroundColor = "#333";
				}
            });
            elmGetter.each('.mdui-select-menu-item.mdui-ripple', document.body.children.namedItem('container').contentDocument, div => {
				if (div) {
                    div.style.color = "#FFF";
				}
            });

            elmGetter.get('main', document.body.children.namedItem('container').contentDocument, 1333).then(div => {
				if (div) {
					div.style.backgroundColor = "#333";
					console.log(div.children);
					for (var i in div.children) {
					//console.log(div.children[i]);
					div.children[i].style.backgroundColor = "#333";
					div.children[i].style.color = "#FFF";
					}
				}
            });
            elmGetter.get('body', document.body.children.namedItem('container').contentDocument, 1333).then(div => {
				if (div) {
					div.style.backgroundColor = "#333";
				}
            });

            elmGetter.each('sectionTitle', document, div => {
				if (div) {
                    //console.log(div);
					div.style.color = "#FFF";
				}
            });
            elmGetter.each('.btn.btn-light', document.body.children.namedItem('container').contentDocument, div => {
				if (div) {
                    div.style.backgroundColor = "#222";
                    div.className = "btn";
				}
            });
		}, 150);
    };

    shadowBringer();

    elmGetter.get('.loading-hover', document, 100).then(div => {
		//console.log(div.children);
		div.style.backgroundColor = "#333";
        div.style.color = "#fff";
    });
})();
