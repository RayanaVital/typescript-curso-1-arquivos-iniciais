export function logTimeExecution(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divider = 1;
            let unit = "miliseconds";
            if (inSeconds) {
                divider = 1000;
                unit = 'seconds';
            }
            const t1 = performance.now();
            const returnValue = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t1 - t2) / 100} ${unit}`);
            returnValue;
        };
    };
}
