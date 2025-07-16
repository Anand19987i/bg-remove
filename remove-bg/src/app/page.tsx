"use client"
export default function Home() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <div>
            <h1 className="text-3xl text-center font-bold underline">Remove Bg</h1>
            <p className="text-center">Upload your image</p>
            <form action="" onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4">
                <input type="file"
                accept="image/*"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        const formData = new FormData();
                        formData.append("file", file);
                        fetch("https://api.remove.bg/v1/remove", {
                            method: "POST",
                            body: formData,
                            headers: {
                                "X-Api-Key": "YOUR_API_KEY",
                            },
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                console.log(data);
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                    }
                }}
                 />
                <button type="submit">Remove Bg</button>
            </form>
        </div>
    )
}