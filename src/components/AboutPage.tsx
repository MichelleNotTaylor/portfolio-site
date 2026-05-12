const SKILLS = ['React', 'TypeScript', 'Node.js', 'Go', 'Python', 'REST APIs', 'Clean Architecture'];

export default function AboutPage() {
  return (
    <section aria-labelledby="about-heading" className="py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="mb-16 animate-slideDown">
          <p className="text-xs font-semibold tracking-widest text-pink-600 dark:text-pink-400 uppercase mb-3">
            Background
          </p>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">

          {/* Sidebar */}
          <aside className="md:col-span-2 space-y-8 animate-slideUp">
            {/* Profile */}
            <div className="flex items-center gap-4 md:flex-col md:items-start">
              <img
                src="https://avatars.githubusercontent.com/u/46630676?s=400&u=594ae3d9b2587d9c9d635184a883e718bdbdac37&v=4"
                alt="Michelle Taylor"
                className="w-16 h-16 rounded-full object-cover border-2 border-slate-100 dark:border-slate-800 shadow-md flex-shrink-0"
              />
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Michelle Taylor</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  Software Engineer
                  <span className="mx-1.5 text-slate-300 dark:text-slate-600" aria-hidden="true">·</span>
                  Iowa
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2" aria-label="Technologies and skills">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Bio */}
          <div className="md:col-span-3 space-y-5 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Hi there! I'm Michelle, a software engineer living in Iowa. I'm passionate about creating elegant,
              efficient solutions to complex problems and bringing ideas to life through code.
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me spending time with my two wonderful kiddos, who keep life exciting
              and full of surprises! I love to read — there's nothing quite like getting lost in a good book. I'm also
              an avid crocheter and knitter, finding joy in creating cozy blankets, scarves, and all sorts of handmade
              treasures.
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I believe in continuous growth and learning. Technology is always evolving, and so am I. Every day brings
              new opportunities to learn something new, whether it's a programming language, a design pattern, or a
              life lesson from my kids.
            </p>
            <p className="text-base font-medium text-pink-600 dark:text-pink-400 pt-2">
              Always learning, ever changing. 🌸
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
