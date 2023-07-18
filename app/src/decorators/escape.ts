export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        let returnValue = originalMethod.apply(this, args);
        if(typeof returnValue === 'string'){
            console.log(`@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}`)
            returnValue = returnValue.replace(/<script>[\s\S]*?<script>/, '')
        }
        return returnValue
    }
    return descriptor
}