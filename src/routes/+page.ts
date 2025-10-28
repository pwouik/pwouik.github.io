import type { PageLoad } from './$types';
import { error } from "@sveltejs/kit";
import type { Component } from 'svelte';

const articles = import.meta.glob<SvxModule>('/src/lib/content/*.svx', { eager: true});
type SvxModule = {
  default: Component;
  metadata: Record<string, any>;
};
type ProjectInfo = {
    route:string;
    title:string;
}
export const load: PageLoad = async ({ params }) => {
    let project_info:ProjectInfo[]= [];
    for (const path in articles) {
        let mod = articles[path];
        project_info.push({route:path.replace(/^.*[\\/]/, '').replace(/\.svx$/, ''),title:mod.metadata.title});
    }
    return {
        project_info
    };
};