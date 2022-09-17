console.log('Pizza Oven');

function pizzaOven(tipoCorteza, tipoSalsa,quesos,salsas){
    const pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;

}

let p1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"],["pepperoni","salchicha"])
console.log(p1);
let p2 = pizzaOven("Lanzada a mano", "marinara", ["mozzarella","feta"],["champinones","aceitunas","cebollas"])
console.log(p2);
let p3 = pizzaOven("estilo Nueva york", "tradicional", ["mozzarella","queso azul"],["nueces","miel","cebollas"])
console.log(p3);
let p4 = pizzaOven("tradicional;", "pesto", ["extra mozzarella"],["tomate","albahaca","aji"])
console.log(p4);
