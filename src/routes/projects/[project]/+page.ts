import type { PageLoad } from './$types';
import { error } from "@sveltejs/kit";
import type { Component } from 'svelte';

const articles = import.meta.glob<SvxModule>('/src/lib/content/*.svx');
type SvxModule = {
  default: Component;
  metadata: Record<string, any>;
};
export const load: PageLoad = async ({ params }) => {
    const loader = articles[`/src/lib/content/${params.project}.svx`];
    if (!loader) {
        throw error(404, "Can't find content");
    }

    const module = await loader();
    return {
        article: module
    };
};