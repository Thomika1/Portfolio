<script>
    import Step from "./Step.svelte";

    let steps = [
        {
            name: "Rinha de backend - programming competition",
            icon: "fa-solid fa-coins",
            href: "https://github.com/Thomika1/rinha-2025",
        },
    ];

    let benefits = [
        {
            name: "Backend Development",
            description:
                "Passionate about building robust and fast systems using any technology.",
        },
        {
            name: "Curious Learner",
            description:
                "Always eager to explore new technologies and improve my skills.",
        },
        {
            name: "Computer Engineering Student",
            description: "Currently pursuing a degree in Computer Engineering",
        },
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-3 gap-10 py-8 sm:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10 order-1"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi, I'm <span class="poppins text-violet-400">Thomaz</span>
                Maldonado
                <br />Backend
                <span class="poppins text-violet-400">Developer</span>
                &
                <span class="poppins text-violet-400">Computer Engineering</span
                > Student
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My favotire stack is Golang
            </p>
            <a
                class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
                href="https://www.linkedin.com/in/thomaz-maldonado-bonfim/"
                target="_blank"
            >
                <div
                    class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                ></div>
                <h4 class="relative z-9">
                    Get in touch <i class="fa-solid fa-arrow-right text-sm"></i>
                </h4>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center order-2">
            <img
                src="/images/profile.png"
                alt="Thomaz Maldonado"
                class="object-cover z-[2] max-h-[70vh]"
            />
        </div>

        <!-- Seção de projetos como terceira coluna em desktop -->
        <div class="order-3 lg:flex lg:flex-col lg:justify-center">
            <section
                id="projects"
                class="py-20 lg:py-0 flex flex-col gap-12 lg:gap-6"
            >
                <div class="flex flex-col gap-2 text-center lg:text-left">
                    <h6 class="text-lg sm:text-xl md:text-2xl">
                        A few of my projects
                    </h6>
                    <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                        My <span class="poppins text-violet-400">Github</span> profile
                    </h3>
                </div>
                <a
                    href="https://github.com/Thomika1"
                    target="_blank"
                    class="mx-auto lg:mr-auto px-6 py-2 rounded-md border border-solid border-whsite flex items-center gap-2 hover:border-violet-700 duration-200"
                    aria-label="Visit my GitHub profile"
                >
                    <i class="fab fa-github"></i>
                </a>
            </section>
        </div>
    </section>

    <!-- Seção separada para os Steps -->
    <section id="projects-details" class="py-20 lg:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>
                    Architected a high-performance payment gateway using <strong
                        class="text-violet-400">Go (Golang)</strong
                    >
                    and <strong class="text-violet-400">Fiber</strong>, fully
                    orchestrated via
                    <strong class="text-violet-400">Docker Compose</strong>. The
                    system secured the
                    <strong class="text-violet-400"
                        >5th place among 92 Go implementations</strong
                    >
                    (24th out of 302 overall) by utilizing
                    <strong class="text-violet-400">Redis</strong>
                    for asynchronous queuing and
                    <strong class="text-violet-400">Goroutines</strong>
                    for massive concurrency. Implemented strict data consistency
                    with failover logic, achieving low p99 latency using the
                    <strong class="text-violet-400">Sonic</strong> parser.
                </p>
            </Step>
        </div>
    </section>

    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24
    relative"
    >
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3
    before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3
    after:h-1.5 after:bg-violet-700 py-4"
        >
            <h6 class="text-lg sm:text-xl md:text-2xl">Want to know me?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-violet-400">about</span> me.
            </h3>
        </div>
        <p
            class="mx-auto poppins font-semibold max-w-4xl text-center text-lg sm:text-xl md:text-2xl"
        >
            I am a passionate developer with a strong background in building
            scalable and efficient applications. I enjoy working with modern
            technologies and continuously improving my skills.
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                            <p class="text-xl py-4">{benefit.description}</p>
                        </h3>
                    </div>
                </div>
            {/each}
        </div>
    </section>
</main>
