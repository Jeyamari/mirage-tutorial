import Route from '@ember/routing/route';
export default Route.extend({
    async  model(params)
    {
        this.set('order',params.order);
        let response = await fetch("https://api.jsonbin.io/b/5e382585593fd7418575642b/latest");
        let result=await response.json();
        return result.results;  
    }
});
