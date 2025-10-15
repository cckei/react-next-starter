import { PageType } from '@/app/types/sections';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    // For example, fetch data from your DB here
    const page = {
        id: '1',
        name: request.nextUrl.searchParams.get('page'),
        title: 'Home',
        description: 'Home',
        image: 'https://placehold.co/1200x800',
        link: 'https://www.google.com',
        meta: {
            title: 'Home',
            description: 'Home',
            image: 'https://placehold.co/1200x800',
            link: 'https://www.google.com'
        },
        sections: [
            {
                id: 'image-text-adjacent',
                name: 'Image Text Adjacent',
                title: 'Image Text Adjacent 1',
                description: 'Image Text Adjacent',
                image: 'https://placehold.co/1200x800',
                link: 'https://www.google.com',
                reverse: false,
                align: 'top'
            },
            {
                id: 'image-text-adjacent',
                name: 'Image Text Adjacent',
                title: 'Image Text Adjacent 2',
                description: 'Image Text Adjacent',
                image: 'https://placehold.co/1200x800',
                link: 'https://www.google.com',
                reverse: true,
                align: 'middle'
            }
        ]
    } as PageType

    return new Response(JSON.stringify(page), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
   
  export async function POST(request: Request) {
    // Parse the request body
    const body = await request.json();
    const { name } = body;
   
    // e.g. Insert new user into your DB
    const newUser = { id: Date.now(), name };
   
    return new Response(JSON.stringify(newUser), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  }