!function(){var r=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n.article=r({1:function(r,n,o,l,a){var i=r.lambda,e=r.escapeExpression,r=r.lookupProperty||function(r,n){if(Object.prototype.hasOwnProperty.call(r,n))return r[n]};return'<article data-id="'+e(i(null!=n?r(n,"id"):n,n))+'">\r\n<div class="row">\r\n    <div class="col-md-6">\r\n        <div class="contenedorArticuloImagen">\r\n            <img class="imagenArticulo" src="'+e(i(null!=n?r(n,"urlImagen"):n,n))+'" alt="">\r\n        </div>\r\n    </div>\r\n    <div class="col-md-6">\r\n        <div class="contenedorArticuloDescripcion">\r\n            <span class="articuloDescripcion">'+e(i(null!=n?r(n,"nombre"):n,n))+'</span>\r\n            <span class="articuloPrecio">'+e(i(null!=n?r(n,"precio"):n,n))+"</span>\r\n        </div>  \r\n    </div>\r\n</div>            \r\n</article>\r\n"},compiler:[8,">= 4.3.0"],main:function(r,n,o,l,a){var i=r.lookupProperty||function(r,n){if(Object.prototype.hasOwnProperty.call(r,n))return r[n]};return null!=(o=i(o,"each").call(null!=n?n:r.nullContext||{},null!=n?i(n,"productos"):n,{name:"each",hash:{},fn:r.program(1,a,0),inverse:r.noop,data:a,loc:{start:{line:1,column:0},end:{line:17,column:9}}}))?o:""},useData:!0}),n.homepage=r({compiler:[8,">= 4.3.0"],main:function(r,n,o,l,a){return'<form id="formBusqueda" action="urlBuscarAction" class="form">\r\n            <div class="row">\r\n                <div class="col-md-12">\r\n                    <div class="form-group">\r\n                        <input type="text" placeholder="Buscar" class="form-control" id="buscador"></input>                \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="row">\r\n                <div class="col-md-12">\r\n                    <div class="form-group">\r\n                        <label for="ordenarpor">Ordenar por..</label>\r\n                        <select name="ordenarpor" id="ordenarpor" class="form-control">\r\n                            <option value="">Seleccione..</option>\r\n                            <option value="1">Menor precio</option>\r\n                            <option value="2">Mayor Precio</option>                    \r\n                        </select>                \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="row">\r\n                <div class="col-md-12">\r\n                    <div class="form-group">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div id="listaArticulos">\r\n            \r\n        </div>'},useData:!0})}();