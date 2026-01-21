import prisma from "@/libs/prisma";

export async function POST(request) {
    const { anime_mal_id, user_email, comment, username, anime_title } = await request.json();
    
    const data = { anime_mal_id, user_email, comment, username, anime_title };

    try {
        const createComment = await prisma.comment.create({ data });
        return Response.json({ status: 200, isCreated: true });
    } catch (error) {
        console.log(error); // Checks the terminal for the specific error
        return Response.json({ status: 500, isCreated: false });
    }
}