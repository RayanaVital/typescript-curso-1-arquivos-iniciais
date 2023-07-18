export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`--- Método ${propertyKey}`);
        console.log(`----- parâmetros ${JSON.stringify(args)}`);
        const returnValue = originalMethod.apply(this, args);
        console.log(`--- retorno ${JSON.stringify(returnValue)}`);
        return returnValue
    }
    return descriptor
}