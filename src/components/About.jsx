

export default function About() {
    return (
        <section className="mx-52 my-20">
            <div className="flex items-center gap-x-5 text-2xl">
                <span className="text-primary">01.</span>
                <span className="text-secondary font-bold text-3xl tracking-wider">About Me</span>
                <div className="after:content-[''] after:w-64 after:h-[2px]  after:bg-secondaryLight after:block after:mt-2"></div>
            </div>
            <div className="text-xl text-secondary flex items-center justify-between">
    <p className="w-[700px] mb-32">
        Hello! My name is Deependra Singh and I enjoy creating things that live on the internet for a better user interface and experience.
    </p>
    <div className="outline outline-2 outline-primary relative h-64 w-64 hover:cursor-pointer mt-16">
        <img
            src="../../public/depu.png"
            alt="Image description"
            className="absolute grayscale hover:grayscale-0 hover:-translate-x-2 hover:-translate-y-2 transition-all duration-500"
        />
    </div>
</div>

        </section>
    )
}
