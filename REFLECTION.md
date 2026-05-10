# Project Reflection - Professional Portfolio
### CMPA 4303 | Michael Buell

---

## 1. Decisions

The most important decision I made was building the site in plain HTML, CSS, and
JavaScript rather than using a framework. That choice forced me to understand what I was
writing at every step, and the learning stuck in a way that relying on abstraction would
not have allowed. The second significant decision was scoping the project deliberately -
fewer pages, but each one functional and polished - rather than building something wider
but shallow. Prioritizing depth produced a better result, and it taught me early that
constraints can be an asset. Switching to Cloudflare Pages for hosting, though unplanned,
was also worth noting. The automatic redeploy on every GitHub push removed friction from
iteration and made the project feel like a real product rather than a class exercise.

---

## 2. What Worked

The toolchain worked exceptionally well. VS Code, GitHub, Cloudflare Pages, and Claude
AI created a fast, organized workflow that encouraged experimentation because deploying
a change took under a minute. Building the entire visual system around CSS custom
properties from the start also paid off well - the light/dark mode toggle,
consistent card styling, and theme transitions across all five pages were all made
possible by that foundational decision. I am also satisfied with how the JavaScript
features came together. I had no meaningful JS experience going in, and by the end the
site included a typing animation, scroll-based section tracking, form validation with
asynchronous submission, and a persistent theme toggle. Seeing those work in something I
built myself was one of the more rewarding moments of the semester.

---

## 3. What I Would Do Differently

If starting over, I would define the visual design system before writing any HTML. I
began coding before settling on colors, type scale, or spacing rules, which meant the
first version of the site required a near-complete CSS rewrite before it looked
intentional. An hour of planning upfront would have saved several hours of cleanup. I
would also introduce JavaScript earlier in the process rather than treating it as
something to layer on after the structure was in place, since several mid-project HTML
changes were only necessary because I had not planned for the JS features from the start.

---

## 4. What I Learned

The most important thing I learned about building for the web is that the gap between
something that works and something that feels good is made up entirely of details. A
form that submits is functional. A form that validates in real time, disables during
submission, and returns a clear success or error message is polished. That distinction -
and the instinct to keep asking what the experience feels like for the person using it -
is something I did not have at the start of the semester. About myself, I learned I am
more capable of working through unfamiliar technical problems than I assumed. About the
tools, I learned that AI assistance is most valuable when you understand the problem well
enough to evaluate the output critically - using it as a shortcut without engaging with
the code would have produced something I could not maintain or build upon. About the
process, I learned that iteration is not a sign something went wrong. The final site
looks nothing like the skeleton I started with, and every version in between was
necessary. The willingness to troubleshoot, rewrite, and test something that is not 
working is not wasted effort and paid off for this project.