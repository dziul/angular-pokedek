(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ywpW:function(e,t,n){"use strict";n.r(t),n.d(t,"PokedekModule",(function(){return fe}));var o=n("vxfF"),i=n("ofXK"),a=n("3Pt+"),r=n("tyNb"),s=n("iIjj"),c=n("fXoL");let l=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[i.c,s.a,r.h,a.c]]}),e})();var p=n("2Vo4"),d=n("XNiG"),g=n("EY2u"),u=n("3E0/"),b=n("vkgz"),f=n("JIr8"),m=n("NXyV");const h=e=>t=>Object(m.a)(()=>(e(),t));var k=n("Zq6G"),_=n("cp0P"),x=n("jtHE"),y=n("oB13");function w(e,t,n,o){n&&"function"!=typeof n&&(o=n);const i="function"==typeof n?n:void 0,a=new x.a(e,t,o);return e=>Object(y.a)(()=>a,i)(e)}var P=n("x+ZX");const O=()=>e=>e.pipe(w(1),Object(P.a)());var v=n("LRne"),M=n("VRyK"),C=n("7o/Q");class I{constructor(e,t){this.count=e,this.source=t}call(e,t){return t.subscribe(new j(e,this.count,this.source))}}class j extends C.a{constructor(e,t,n){super(e),this.count=t,this.source=n}error(e){if(!this.isStopped){const{source:t,count:n}=this;if(0===n)return super.error(e);n>-1&&(this.count=n-1),t.subscribe(this._unsubscribeAndRecycle())}}}var L=n("IzEk"),z=n("5+tZ"),Q=n("lJxs"),$=n("0EUg"),B=n("128B");function E(e,t,n){return 0===n?[t]:(e.push(t),e)}function D(){return Object(B.a)(E,[])}var F=n("bHdf"),A=n("tk/3");let N=(()=>{class e{constructor(e){this.http=e,this.languageDefault="en",this.languageOriginal="ja"}get(e){return this.http.get(e).pipe(function(e=-1){return t=>t.lift(new I(e,t))}(2),Object(L.a)(1))}getAllGeneration(){return this.get("/generation").pipe(Object(z.a)(e=>e.results),Object(Q.a)(e=>this.get(e.url)),Object($.a)(),Object(Q.a)(e=>{const t=this.searchFilterDataByLanguage(e.names,"name");return{name:{id:e.name,original:t.original,default:t.default},id:e.id,pokemons:[...e.pokemon_species.map(e=>{const t=e.url.replace(/.*\/(\d+).?$/,"$1");return Object.assign(Object.assign({},e),{id:t.length&&Number(t),imageIcon:this.getPokemonImageIcon(e.name)})}).sort((e,t)=>e.id-t.id)]}}),D())}getAllPokemons(){return this.getAllGeneration().pipe(Object(F.a)(),function(...e){const t=e.length;if(0===t)throw new Error("list of properties cannot be empty.");return n=>Object(Q.a)(function(e,t){return n=>{let o=n;for(let i=0;i<t;i++){const t=o[e[i]];if(void 0===t)return;o=t}return o}}(e,t))(n)}("pokemons"),Object($.a)(),D())}pokemonSpecieParser(e){return e.pipe(Object(z.a)(e=>Object(_.a)({base:Object(v.a)(e),evolutionChain:this.get(e.evolution_chain.url),generation:this.generationParser(this.get(e.generation.url))})))}getPokemon(e){return this.get(`/pokemon/${e}`).pipe(Object(z.a)(e=>Object(_.a)({base:Object(v.a)(e),species:this.pokemonSpecieParser(this.get(e.species.url)),type:Object(M.a)(...e.types.map(e=>this.get(e.type.url))).pipe(D())})),Object(Q.a)(e=>{const{base:t,species:n}=e,o=this.searchFilterDataByLanguage(n.base.names,"name");return{height:Number((.1*t.height).toFixed(1)),weight:Number((.1*t.weight).toFixed(1)),description:this.searchFilterDataByLanguage(n.base.flavor_text_entries,"flavor_text").default.replace(/(\r\n|\n|\r|\u000c)/gm," "),image:{default:this.getPokemonImageDefault(n.base.id),icon:this.getPokemonImageIcon(t.name)},name:{original:o.original,id:t.name,default:o.default},id:n.base.id,generation:n.generation}}))}typeParser(e){return e}generationParser(e){return e.pipe(Object(Q.a)(e=>{const t=this.searchFilterDataByLanguage(e.names,"name");return{id:e.id,name:Object.assign(Object.assign({},t),{id:e.name})}}))}searchFilterDataByLanguage(e,t){return e.reduce((e,n)=>(n.language.name===this.languageDefault&&(e=Object.assign(Object.assign({},e),{default:n[t]})),n.language.name===this.languageOriginal&&(e=Object.assign(Object.assign({},e),{original:n[t]})),e),{})}getPokemonImageDefault(e){return`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${((e,t=2)=>e.toString().padStart(t,"0"))(e,3)}.png`}getPokemonImageIcon(e){return`https://img.pokemondb.net/sprites/sword-shield/icon/${e}.png`}}return e.\u0275fac=function(t){return new(t||e)(c.Ub(A.b))},e.\u0275prov=c.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),V=(()=>{class e{constructor(e){this.api=e,this.pokemons={}}onlyOneEmitter(e){return e.pipe(w(1),Object(P.a)())}getPokemonList(){return this.pokelist$||(this.pokelist$=this.api.getAllPokemons().pipe(O())),this.pokelist$}getGenerationList(){return this.generationList$||(this.generationList$=this.api.getAllGeneration().pipe(O())),this.generationList$}getPokemonInformation(e){return this.pokemons[e]||(this.pokemons[e]=this.api.getPokemon(e).pipe(O())),this.pokemons[e]}getAllPokemonInformation(){return Object(_.a)(this.pokemons)}}return e.\u0275fac=function(t){return new(t||e)(c.Ub(N))},e.\u0275prov=c.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var S=n("u47x"),X=n("nYR2");let K=(()=>{class e{constructor(e){this.hostElement=e}focus(){this.hostElement.nativeElement.focus()}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(c.l))},e.\u0275dir=c.Gb({type:e,selectors:[["","keyboardNavigableItem",""]],inputs:{value:["keyboardNavigableItem","value"]}}),e})();var G=n("bTqV"),R=n("kmnG"),J=n("NFeN");let Y=(()=>{class e{transform(e,t){return e.filter(e=>-1!==`${e.name} ${e.id}`.indexOf(t.trim().toLowerCase()))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=c.Kb({name:"where",type:e,pure:!0}),e})();const Z=["input"],H=["lazy"];function T(e,t){if(1&e){const e=c.Rb();c.Qb(0,"button",5),c.Yb("click",(function(){return c.oc(e),c.cc().inputValue=""})),c.Qb(1,"mat-icon"),c.wc(2,"close"),c.Pb(),c.Pb()}}const U=function(e){return["/pokedek",e]};function q(e,t){if(1&e){const e=c.Rb();c.Qb(0,"li",8),c.Qb(1,"a",9,10),c.Yb("click",(function(){c.oc(e);const n=t.index;return c.cc(2).onClick(n)})),c.Qb(3,"h4",11),c.wc(4),c.Qb(5,"small"),c.wc(6),c.Pb(),c.Pb(),c.Mb(7,"img",12,13),c.Pb(),c.Pb()}if(2&e){const e=t.$implicit;c.Bb(1),c.ic("routerLink",c.lc(7,U,e.id))("keyboardNavigableItem",e.name),c.Bb(3),c.yc(" ",e.name," "),c.Bb(2),c.yc("#",e.id,""),c.Bb(1),c.ic("alt",e.name),c.Cb("data-src",e.imageIcon)("aria-hidden",!0)}}function W(e,t){if(1&e){const e=c.Rb();c.Qb(0,"ul",6),c.Yb("keydown",(function(t){return c.oc(e),c.cc().onKeyDown(t)})),c.uc(1,q,9,9,"li",7),c.dc(2,"where"),c.Pb()}if(2&e){const e=t.ngIf,n=c.cc();c.Bb(1),c.ic("ngForOf",c.fc(2,1,e,n.inputValue))}}let ee=(()=>{class e{constructor(e,t){this.store=e,this.renderer2=t,this.inputValue="",this.loading$=new p.a(!1),this.focusByInput=!1}ngOnInit(){this.list$=this.store.getPokemonList().pipe(h(()=>this.loading$.next(!0)),Object(X.a)(()=>{this.loading$.next(!1)}))}ngAfterViewInit(){this.keyManager=new S.b(this.options);const e=new IntersectionObserver((t,n)=>{for(const o of t)o.isIntersecting&&(this.renderer2.setAttribute(o.target,"src",o.target.dataset.src),this.renderer2.addClass(o.target,"checked"),this.renderer2.setAttribute(o.target,"aria-hidden","false"),e.unobserve(o.target))},{rootMargin:"100px"});this.imagesElement.changes.subscribe(t=>{t.forEach(t=>{e.observe(t.nativeElement)})})}onKeyDown(e){switch(e.key.toLowerCase()){case"arrowup":0===this.keyManager.activeItemIndex&&this.focusByInput?(this.focusByInput=!1,this.inputElement.nativeElement.select()):this.keyManager.onKeydown(e);break;case"home":this.keyManager.setFirstItemActive();break;case"end":this.keyManager.setLastItemActive();break;default:this.keyManager.onKeydown(e)}}onKeyDownInput(e){switch(e.key.toLowerCase()){case"arrowdown":this.keyManager.setFirstItemActive()}this.focusByInput=!0}onClick(e){console.log(e),this.keyManager.setActiveItem(e)}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(V),c.Lb(c.E))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-poke-select"]],viewQuery:function(e,t){var n;1&e&&(c.zc(Z,!0,c.l),c.zc(H,!0,c.l),c.zc(K,!0)),2&e&&(c.mc(n=c.Zb())&&(t.inputElement=n.first),c.mc(n=c.Zb())&&(t.imagesElement=n),c.mc(n=c.Zb())&&(t.options=n))},decls:6,vars:5,consts:[[1,"poke-select__input"],["type","text","placeholder","Search by name or id...",3,"ngModel","ngModelChange","keydown"],["input",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["class","poke-select__select","role","listbox",3,"keydown",4,"ngIf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["role","listbox",1,"poke-select__select",3,"keydown"],["class","poke-select__option","role","listitem",4,"ngFor","ngForOf"],["role","listitem",1,"poke-select__option"],["mat-button","","routerLinkActive","active",3,"routerLink","keyboardNavigableItem","click"],["linkActive","routerLinkActive"],[1,"poke-select__text"],[1,"poke-select__image",3,"alt"],["lazy",""]],template:function(e,t){1&e&&(c.Qb(0,"label",0),c.Qb(1,"input",1,2),c.Yb("ngModelChange",(function(e){return t.inputValue=e}))("keydown",(function(e){return t.onKeyDownInput(e)})),c.Pb(),c.uc(3,T,3,0,"button",3),c.Pb(),c.uc(4,W,3,4,"ul",4),c.dc(5,"async")),2&e&&(c.Bb(1),c.ic("ngModel",t.inputValue),c.Bb(2),c.ic("ngIf",t.inputValue),c.Bb(1),c.ic("ngIf",c.ec(5,3,t.list$)))},directives:[a.a,a.f,a.h,i.k,G.b,R.d,J.a,i.j,G.a,r.g,r.f,K],pipes:[i.b,Y],styles:["[_nghost-%COMP%]{-ms-flex-direction:column;flex-direction:column;height:100%}[_nghost-%COMP%], [_nghost-%COMP%]   .poke-select__input[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex}[_nghost-%COMP%]   .poke-select__input[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;-ms-flex-pack:end;justify-content:flex-end;width:100%;background:#fff;padding:12px 16px;box-sizing:border-box}[_nghost-%COMP%]   .poke-select__input[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{font-size:14px;line-height:24px;box-sizing:border-box;border:0;width:100%;background:none;text-align:right}[_nghost-%COMP%]   .poke-select__select[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;overflow:hidden;overflow-y:auto;box-sizing:border-box}[_nghost-%COMP%]   .poke-select__text[_ngcontent-%COMP%]{margin:0 8px 0 0}[_nghost-%COMP%]   .poke-select__text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:80%;opacity:.4}[_nghost-%COMP%]   .poke-select__image[_ngcontent-%COMP%]{width:100%;max-width:56px;min-height:42px;transition:opacity .5s;opacity:0}[_nghost-%COMP%]   .poke-select__image.checked[_ngcontent-%COMP%]{opacity:1}"],changeDetection:0}),e})();var te=n("xgIS");const ne=["picture"];let oe=(()=>{class e{constructor(){this.src="",this.alt="",this.loaded=new c.n}ngOnInit(){}ngAfterViewInit(){Object(te.a)(this.pictureElement.nativeElement,"load").subscribe(e=>{console.log(e),this.loaded.emit(!0)})}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Fb({type:e,selectors:[["app-picture"]],viewQuery:function(e,t){var n;1&e&&c.zc(ne,!0,c.l),2&e&&c.mc(n=c.Zb())&&(t.pictureElement=n.first)},inputs:{src:"src",alt:"alt"},outputs:{loaded:"loaded"},decls:2,vars:2,consts:[[1,"poke-picture",3,"src","alt"],["picture",""]],template:function(e,t){1&e&&c.Mb(0,"img",0,1),2&e&&(c.jc("src",t.src,c.pc),c.jc("alt",t.alt))},styles:[".poke-picture[_ngcontent-%COMP%] {\n        max-width: inherit;\n        max-height: inherit;\n      }"]}),e})();const ie=["*"];let ae=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Fb({type:e,selectors:[["app-pokeball-loader"]],ngContentSelectors:ie,decls:3,vars:0,consts:[["role","img","attr.aria-label","pok\xe9ball",1,"pokeball-loader"],[1,"pokeball-loader__content"]],template:function(e,t){1&e&&(c.hc(),c.Qb(0,"span",0),c.Mb(1,"span",1),c.Pb(),c.gc(2))},styles:['[_nghost-%COMP%]{-ms-flex-align:center;align-items:center;width:100%;height:100%;position:absolute;left:0;top:0}.pokeball-loader[_ngcontent-%COMP%], [_nghost-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.pokeball-loader[_ngcontent-%COMP%]{position:relative;width:46px;height:46px}.pokeball-loader[_ngcontent-%COMP%]:after{content:"";background:rgba(0,0,0,.2);height:5px;width:60%;border-radius:100%;position:absolute;bottom:-2px}.pokeball-loader[_ngcontent-%COMP%]:before{content:"";position:absolute;background-color:red;width:6px;height:6px;border-radius:50%;bottom:20px;right:20px;z-index:4;-webkit-animation:capturing .6s ease-in-out infinite alternate,flare 1s ease-in-out infinite alternate;animation:capturing .6s ease-in-out infinite alternate,flare 1s ease-in-out infinite alternate}.pokeball-loader__content[_ngcontent-%COMP%]{box-sizing:border-box;z-index:2;display:block;width:100%;height:1005;background-color:#fff;border-radius:50%;position:relative;overflow:hidden;border:2px solid;-webkit-animation:capturing .6s ease-in-out infinite alternate;animation:capturing .6s ease-in-out infinite alternate}.pokeball-loader__content[_ngcontent-%COMP%]:after{content:"";position:absolute;width:46px;height:23px;background-color:red;border-bottom:4px solid;top:-4px}.pokeball-loader__content[_ngcontent-%COMP%]:before{content:"";position:absolute;background-color:#fff;width:10px;height:10px;border:4px solid;border-radius:50%;bottom:12px;right:12px;z-index:1}@-webkit-keyframes capturing{0%,90%{transform:rotate(0deg) translatex(0)}20%,80%{transform:rotate(12deg) translatex(1px)}50%,to{transform:rotate(-12deg) translatex(-2px)}}@keyframes capturing{0%,90%{transform:rotate(0deg) translatex(0)}20%,80%{transform:rotate(12deg) translatex(1px)}50%,to{transform:rotate(-12deg) translatex(-2px)}}@-webkit-keyframes flare{0%,80%{opacity:.2}20%,to{opacity:.6}}@keyframes flare{0%,80%{opacity:.2}20%,to{opacity:.6}}']}),e})();function re(e,t){if(1&e&&(c.Qb(0,"div",9),c.Qb(1,"small",10),c.wc(2),c.Pb(),c.Qb(3,"h2",11),c.wc(4),c.Qb(5,"small"),c.wc(6),c.Pb(),c.Pb(),c.Qb(7,"p",12),c.wc(8),c.Pb(),c.Qb(9,"span"),c.wc(10),c.Pb(),c.Mb(11,"br"),c.Qb(12,"span"),c.wc(13),c.Pb(),c.Qb(14,"span",13),c.wc(15),c.Pb(),c.Pb()),2&e){const e=c.cc().ngIf;c.Bb(2),c.xc(e.generation.name.default),c.Bb(2),c.yc(" ",e.name.default,""),c.Bb(2),c.yc("#",e.id,""),c.Bb(2),c.yc(" ",e.description," "),c.Bb(2),c.yc("height: ",e.height,"m"),c.Bb(3),c.yc("weight: ",e.weight,"kg"),c.Bb(2),c.xc(e.name.original)}}function se(e,t){if(1&e){const e=c.Rb();c.Qb(0,"div",6),c.uc(1,re,16,7,"div",7),c.dc(2,"async"),c.Qb(3,"app-picture",8),c.Yb("loaded",(function(t){return c.oc(e),c.cc().onImageLoaded(t)})),c.Pb(),c.Pb()}if(2&e){const e=t.ngIf,n=c.cc(),o=c.nc(7);c.Bb(1),c.ic("ngIf",c.ec(2,4,n.imageLoaded$))("ngIfElse",o),c.Bb(2),c.ic("src",e.image.default)("alt",e.name.default)}}function ce(e,t){if(1&e&&(c.Qb(0,"div",9),c.Qb(1,"div",15),c.Mb(2,"img",16),c.Qb(3,"p",17),c.wc(4,' This pok\xe9mon "'),c.Qb(5,"span"),c.wc(6),c.Pb(),c.wc(7,"\" doesn't exist, guy! "),c.Pb(),c.Pb(),c.Pb()),2&e){const e=t.ngIf;c.Bb(6),c.xc(e)}}function le(e,t){1&e&&(c.Qb(0,"app-pokeball-loader",18),c.Qb(1,"span"),c.wc(2,"Loading..."),c.Pb(),c.Pb())}function pe(e,t){if(1&e&&(c.uc(0,ce,8,1,"div",7),c.dc(1,"async"),c.uc(2,le,3,0,"ng-template",null,14,c.vc)),2&e){const e=c.nc(3),t=c.cc();c.ic("ngIf",c.ec(1,2,t.error$))("ngIfElse",e)}}function de(e,t){1&e&&(c.Qb(0,"app-pokeball-loader",18),c.Qb(1,"span"),c.wc(2,"Loading..."),c.Pb(),c.Pb())}const ge=function(){return["/pokedek","1"]},ue=[{path:":id",component:(()=>{class e{constructor(e,t,n,o){this.route=e,this.router=t,this.htmlDocument=n,this.store=o,this.imageLoaded$=new p.a(!1),this.error$=new d.a,this.paramsId$=new d.a}ngOnInit(){this.route.params.subscribe(e=>{this.information$=this.store.getPokemonInformation(e.id).pipe(h(()=>{this.imageLoaded$.next(!1),this.error$.next(void 0)}),Object(u.a)(1e3),Object(b.a)(e=>{this.htmlDocument.setTitle(`Pok\xe9mon ${e.name.default}`),this.htmlDocument.setMetaDescription(`${e.name.default}, ${e.description}`)}),Object(f.a)(t=>(this.error$.next(e.id),Object(g.b)())))})}onImageLoaded(e){this.imageLoaded$.next(e)}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(r.a),c.Lb(r.d),c.Lb(k.a),c.Lb(V))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-pokedek"]],decls:9,vars:4,consts:[[1,"pokedek"],[1,"pokedek__content"],["class","pokedek__info",4,"ngIf","ngIfElse"],["loadingError",""],["loaderSecond",""],[1,"pokedek__select"],[1,"pokedek__info"],["class","pokedek__info__content",4,"ngIf","ngIfElse"],[1,"pokedek__info__image",3,"src","alt","loaded"],[1,"pokedek__info__content"],[1,"pokedek__info__small"],[1,"pokedek__info__name"],[1,"pokedek__info__description"],[1,"pokedek__info__water-mark"],["loading",""],[1,"pokedek__error-content"],["src","../../assets/images/ash-meme-ffuu-edited.png",1,"pokedek__error-image"],[1,"pokedek__error-text"],[1,"pokedek__loader"]],template:function(e,t){if(1&e&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.uc(2,se,4,6,"div",2),c.dc(3,"async"),c.uc(4,pe,4,4,"ng-template",null,3,c.vc),c.uc(6,de,3,0,"ng-template",null,4,c.vc),c.Pb(),c.Mb(8,"app-poke-select",5),c.Pb()),2&e){const e=c.nc(5);c.Bb(2),c.ic("ngIf",c.ec(3,2,t.information$))("ngIfElse",e)}},directives:[i.k,ee,oe,ae],pipes:[i.b],styles:['.pokedek[_ngcontent-%COMP%]{height:100%;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;background:rgba(253,213,0,.5)}.pokedek[_ngcontent-%COMP%], .pokedek__content[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch}.pokedek__content[_ngcontent-%COMP%]{width:100%;background:#fdd500;position:relative;z-index:5;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0}.pokedek__content[_ngcontent-%COMP%]:after{content:"";height:100%;width:200px;position:absolute;right:0;background:inherit;-ms-transform:skew(-10deg) translateX(100px);transform:skew(-10deg) translateX(100px);z-index:0}.pokedek__info[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:60px;box-sizing:border-box;z-index:2}.pokedek__info[_ngcontent-%COMP%], .pokedek__info__content[_ngcontent-%COMP%]{width:100%;position:relative}.pokedek__info__name[_ngcontent-%COMP%]{font-size:72px;line-height:1;text-transform:uppercase;font-weight:900}.pokedek__info__name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:30%;padding-left:4px}@media (min-width:1281px){.pokedek__info__name[_ngcontent-%COMP%]{font-size:92px}}.pokedek__info__small[_ngcontent-%COMP%]{font-size:12px;display:block}.pokedek__info__description[_ngcontent-%COMP%]{padding-top:32px;font-size:16px;line-height:1.3;max-width:360px}@media (min-width:1281px){.pokedek__info__description[_ngcontent-%COMP%]{max-width:460px}}.pokedek__info__water-mark[_ngcontent-%COMP%]{position:absolute;top:-60px;left:0;font-size:120px;line-height:1;opacity:.05;white-space:nowrap}@media (min-width:1281px){.pokedek__info__water-mark[_ngcontent-%COMP%]{top:-90px;font-size:180px}}.pokedek__info__image[_ngcontent-%COMP%]{position:absolute;bottom:36px;right:-20%;display:block;width:100%;max-width:360px;max-height:520px}@media (min-width:1281px){.pokedek__info__image[_ngcontent-%COMP%]{right:-12%;max-width:460px}}.pokedek__select[_ngcontent-%COMP%]{height:100%;position:relative;width:30%}.pokedek__loader[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:16px;font-weight:700;padding-left:5px}.pokedek__error-content[_ngcontent-%COMP%]{position:fixed;display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:start;justify-content:flex-start;bottom:0;left:0}.pokedek__error-text[_ngcontent-%COMP%]{max-width:220px;line-height:1.2;text-align:center;background:#fff;border-radius:20px;padding:20px;font-size:18px;position:relative;opacity:0;-webkit-animation:balon .2s .2s forwards;animation:balon .2s .2s forwards}.pokedek__error-text[_ngcontent-%COMP%]:before{content:"";display:block;width:20px;height:20px;background:inherit;position:absolute;left:30px;bottom:-10px;-ms-transform:skew(-40deg,4deg) rotate(-30deg);transform:skew(-40deg,4deg) rotate(-30deg);border-radius:0 0 10px 0}.pokedek__error-text[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-weight:700;text-transform:capitalize}.pokedek__error-image[_ngcontent-%COMP%]{max-height:360px;-ms-transform:translate(-380px,380px);transform:translate(-380px,380px);-webkit-animation:toastyyy .2s ease-out forwards;animation:toastyyy .2s ease-out forwards}@-webkit-keyframes toastyyy{0%{transform:translate(-380px,380px)}to{transform:translate(0)}}@keyframes toastyyy{0%{transform:translate(-380px,380px)}to{transform:translate(0)}}@-webkit-keyframes balon{0%{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:translateX(0)}}@keyframes balon{0%{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:translateX(0)}}']}),e})()},{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Fb({type:e,selectors:[["app-pokedek"]],decls:2,vars:2,consts:[[1,"temp",3,"routerLink"]],template:function(e,t){1&e&&(c.Qb(0,"a",0),c.wc(1,"temporary - info"),c.Pb()),2&e&&c.ic("routerLink",c.kc(1,ge))},directives:[r.g],styles:[".temp[_ngcontent-%COMP%]{margin-top:120px;padding:10px;display:-ms-flexbox;display:flex}"]}),e})()}];let be=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[r.h.forChild(ue)],r.h]}),e})(),fe=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[i.c,be,o.c,s.a,l]]}),e})()}}]);