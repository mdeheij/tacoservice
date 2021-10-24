import { writable, derived, get } from 'svelte/store';

const tacoApiUrl = '/api/tacos';
const baseLayersUrl = tacoApiUrl+'/base-layers';

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const state = writable({
    "ready": false
    
});

export const baseLayers = writable(undefined);

// export const findTaco = (filename) => {return tacos.find((taco) => taco.filename == filename)};

export async function fetchBaseLayers() {
    console.trace("FETCHING TACOS")
    const response = await fetch(baseLayersUrl);
    const data = (await response.json());
    baseLayers.set(data.sort(() => Math.random() - 0.5)
    );
}

// TODO: init every store? seperate file? 
export async function init() {
    if (get(baseLayers)) {
        console.log("Not refetching")
        console.log(get(baseLayers))
        return;
    }
    await fetchBaseLayers();
}

// fetchTacos();

// export const taco = (filename) => {
//     console.log("taco in store called: ", filename)
//     tacos.filter(t => t.filename !== filename);
// }
// /** Data transformation.
// For our use case, we only care about the drink names, not the other information.
// Here, we'll create a derived store to hold the drink names.
// **/
// export const taco = derived(tacos, ($element) => {
//     if ($element.filename == filename) {
//         console.log($element)
//         return $element;
//     }
//     return {};
// });

// export const name = writable('world');

// export const greeting = derived(
// 	name,
// 	$name => `Hello ${$name}!`
// );



    // return fetch('/api/tacos')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         tacos.set(data.sort(() => Math.random() - 0.5));
    //         // console.log(md.render("#hoi"))
    //         // state.set(data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         alert(error);
    //     });