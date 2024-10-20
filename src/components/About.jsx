

export default function About() {
    return (
        <section className="mx-52 my-20">
            <div className="flex flex-col md:flex-row  items-center gap-x-5 text-2xl">
                <span className="text-primary">01.</span>
                <span className="text-secondary font-bold text-3xl tracking-wider">About Me</span>
                <div className="after:content-[''] after:w-64 after:h-[2px]  after:bg-secondaryLight after:block after:mt-2"></div>
            </div>
            <div className="md:mt-0 mt-7 text-xl text-secondary flex flex-col md:flex-row items-center justify-between">
    <p className="md:w-[700px]  mb-32">
        Hello! My name is Deependra Singh and I enjoy creating things that live on the internet for a better user interface and experience.
    </p>
    <div className="outline outline-2 outline-primary relative h-52 w-52 mb-28 md:mb-0  md:h-64 md:w-64 hover:cursor-pointer md:mt-16">
        <img
            src="/depu.png"
            alt="Image description"
            className="absolute grayscale hover:grayscale-0 hover:-translate-x-2 hover:-translate-y-2 transition-all duration-500"
        />
    </div>
</div>

        </section>
    )
}
