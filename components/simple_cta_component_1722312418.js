/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722312418", {
    template: `
    <section id="cta-component" class="bg-red-500 dark:bg-red-600 flex-1">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Revolutionize Your Food Business</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Streamline operations, optimize supply chain, and delight customers with our cutting-edge food industry solutions.</p>
                </div>
                
                <div id="cta-button-container" class="flex space-x-4">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-700 dark:hover:bg-purple-800 focus:outline-none dark:focus:ring-purple-900 shadow-md">Get Started Today</a>
                    <a id="cta-button-2" href="#" class="flex-1 text-purple-600 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-purple-400 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-purple-900 border border-purple-600 shadow-md">Start Today</a>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
