import { it, expect } from 'vitest';
import { transformToNumber } from './numbers.js';

it('should check if result is a number', ()=>{
    //arrange
    const input = '4';
    //act
    const result = transformToNumber(input);
    //assert
    expect(result).toBeTypeOf("number");
});

it('should check if result is a number', ()=>{
    //arrange
    const input = '4';
    
    //act
    const result = transformToNumber(input);
    //assert
    expect(result).toBe(+input);
});

it('should yield about NaN', ()=>{
    //arrange
    const input = 'input';
    const input2 = {};

    //act
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    //assert
    expect(result).toBeNaN();
    expect(result2).toBeNaN();

});

