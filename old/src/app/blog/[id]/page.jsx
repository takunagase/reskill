const page = async ({ params }) => {
    const getPost = async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return res.json();
    };

    const post = await getPost(params.id);
    const { title, body } = post;
    const bodys = body.split('\n');

    return (
        <main className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl mb-6 text-center">
                {title}
            </h1>
            <hr className="mb-6" />
            <div className="text-lg text-center">
                {bodys.map((body, i) => (
                    <p key={i} className="mb-4">{body}</p>
                ))}
            </div>
        </main>
    );
};
export default page;
