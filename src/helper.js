export default {
    getProperties: () => {
        var request = new Request('http://dev1-sample.azurewebsites.net/properties.json');
        try {
             fetch(request, {mode: 'no-cors'})
            .then(data => console.log(data))
        } catch(e) {
            console.log(e);
        }
    }
}