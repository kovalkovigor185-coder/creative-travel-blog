import type { Metadata } from 'next';
import ArticlePage from './[slug]/page';

export const metadata:Metadata={title:'Wild Camping Along Tasmania’s East Coast — The Roam Report'};
export default async function FeaturedArticlePage(){return ArticlePage({params:Promise.resolve({slug:'tasmania'})});}
