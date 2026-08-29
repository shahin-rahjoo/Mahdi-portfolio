import Image from "next/image";

const description = () => {
    return (
        <div
            className="flex 
                flex-col
                gap-y-20
                lg:flex-row
                lg:px-20
                justify-evenly
                items-center
                my-10">
            <div
                className="
                    lg:w-1/2
                    flex
                    justify-center
                    lg:shrink-0
                    lg:justify-start
                    w-full">
                <Image
                    src="/images/image.png"
                    width={300}
                    height={400}
                    priority={true}
                    alt="picture"
                    title="picture"
                    className="w-full max-w-fit object-cover rounded-4xl"
                />
            </div>
            <div className="px-20 lg:px-0">
                <h2
                    className="font-bold
                        text-primary
                        text-2xl
                        md:text-4xl
                        lg:text-5xl
                        mb-10">
                    About ME
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    accusamus laborum dolores culpa aspernatur omnis voluptatem
                    esse facere. Nobis, magnam aut possimus provident cumque quo
                    inventore, veniam consequuntur aliquid temporibus officiis
                    est, tenetur cupiditate in omnis iste porro voluptate ab.
                    Corrupti ex minima velit consequuntur ducimus maiores animi
                    quasi, doloremque laboriosam optio, incidunt molestiae
                    beatae? Quo doloribus, rem officia magni amet tempora
                    exercitationem modi, laborum adipisci aspernatur suscipit,
                    dolores mollitia. Vitae eveniet pariatur, qui voluptas
                    deleniti libero natus nemo accusamus veritatis accusantium
                </p>
            </div>
        </div>
    );
};

export default description;
