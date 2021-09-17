import {addMethod} from "@rsc/middle";

const result = addMethod(1,2);
console.log(result);

interface A{
    id:number;
    name:string;
}

interface B extends Omit<A, 'id'>{
    age: number;
}

const me : B = JSON.parse('{"name":"abc"}');
console.log(me);

