import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'AI Video & Voiceovers | Studio-Quality Content Creation',
  description: 'Create studio-quality videos without a studio. Generate AI voiceovers and explainer videos that look polished and professional—no cameras needed.',
  path: '/services/ai-video',
});

export default function AIVideoPage() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-16 sm:mb-20">
        <div className="mb-4">
          <Link href="/services" className="inline-flex items-center text-sm text-text-secondary hover:text-accent-primary transition-colors">
            ← Back to Services
          </Link>
        </div>
        <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
          Create Studio-Quality Videos Without a Studio
        </h1>
        <p className="mb-8 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
          Use AI to generate voiceovers and explainer videos that look polished and professional—no cameras or microphones needed.
        </p>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-md bg-surface-raised border border-border text-base font-semibold text-text-primary">
            Starting at $80
          </span>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
          Create My AI Video
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mb-12 sm:mb-16 h-1 bg-accent-secondary" />

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          You know video sells—but making it sucks
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            Shooting high-quality video is time-consuming, expensive, and uncomfortable for many founders. AI tools can now generate avatar-based explainers or narrated videos that look great, match your brand, and are ready to publish in hours—not weeks.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Deliverables
        </h2>
        <div className="rounded-md border border-border bg-background p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
          <ul className="space-y-4">
            {[
              '1–3 AI-generated video clips (60–90 seconds each)',
              'Custom avatar or animated visuals',
              'Studio-quality AI voiceover (you choose tone, gender, language)',
              'Background music + simple editing',
              'Source files + publish-ready formats',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Great For:
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { title: 'Landing page explainers', desc: 'Introduce your product in 60 seconds' },
            { title: 'Product demo videos', desc: 'Show features without live recording' },
            { title: 'About the brand content', desc: 'Onboarding or company story videos' },
            { title: 'Reels/shorts', desc: 'For ad campaigns and social media' },
          ].map((useCase, idx) => (
            <div key={idx} className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">{useCase.title}</h3>
                  <p className="text-sm text-text-secondary">{useCase.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Fast, Lean, Effective
        </h2>
        <div className="space-y-3 max-w-2xl">
          <p className="text-text-primary leading-relaxed"><span className="font-semibold">48–72 hour</span> turnaround</p>
          <p className="text-text-primary leading-relaxed">2 rounds of edits included</p>
          <p className="text-text-secondary leading-relaxed">Option to bundle into content series</p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          What This Service Actually Does
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            At its core, this service helps you create professional video content without the hassle of traditional production. You get studio-quality explainer videos, product demos, or brand stories using AI-generated avatars and voiceovers.
          </p>
          <p>
            Instead of booking a studio, hiring a voice actor, or editing footage for days, you provide a script and creative direction. I handle the rest—selecting the right AI voice, generating avatar visuals, adding background music, and delivering publish-ready video files.
          </p>
          <p>
            After implementation, you no longer worry about the technical complexity or time investment of video production. You can ship engaging content faster, test messaging quickly, and scale your video library without scaling your budget.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Who This Service Is Best For
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-primary">✅ Great Fit If You:</h3>
            <ul className="space-y-3">
              {[
                'You need landing page or product explainer videos but don\'t want to appear on camera',
                'You\'re launching a new product and need demo videos quickly',
                'You want to scale video content for ads, social media, or email campaigns without hiring a production team',
                'You\'re testing messaging and need fast turnaround on video variations',
                'You have written content (scripts, blog posts, product descriptions) that would work better as video',
                'You want to add multilingual video content without recording separate takes',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-primary">🚫 Not a Great Fit If You:</h3>
            <ul className="space-y-3 text-text-secondary leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0">•</span>
                <span>You need highly technical tutorial videos with complex screen recordings or live coding demos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0">•</span>
                <span>You want authentic founder testimonials or customer interviews (real people work better here)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0">•</span>
                <span>You already have a full video production team and existing workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0">•</span>
                <span>You need broadcast-quality video for TV or film distribution (AI avatars shine in digital contexts)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Real-World Examples
        </h2>
        <div className="space-y-8">
          {[
            {
              title: 'SaaS Founder Launching a New Feature',
              problem: 'Needed a 60-second explainer video for the landing page but had no video production experience or budget for a studio.',
              solution: 'Created an AI avatar video with a professional voiceover walking through the feature, benefits, and a quick demo. Matched brand colors and added subtle background music.',
              result: 'Landing page conversion increased by 22% within the first week. Founder now uses AI video for all feature launches and saves 10+ hours per video.',
            },
            {
              title: 'E-commerce Brand Building Ad Campaigns',
              problem: 'Wanted to test 5 different ad variations for Facebook and Instagram Reels but couldn\'t afford to shoot multiple takes or hire actors.',
              solution: 'Generated 5 short-form videos (30–45 seconds each) with different messaging angles, all featuring the same AI avatar for brand consistency.',
              result: 'Ran split tests across all variations and found the winner within 48 hours. Reduced ad production cost by 80% compared to traditional video shoots.',
            },
            {
              title: 'Education Startup Creating Onboarding Content',
              problem: 'Had detailed onboarding documentation but users weren\'t reading it. Needed engaging video walkthroughs to improve activation rates.',
              solution: 'Turned existing onboarding docs into a series of 90-second AI avatar videos covering key steps. Added closed captions for accessibility.',
              result: 'User activation improved by 35%. Support tickets related to onboarding dropped by half. Team now uses video-first onboarding for all new features.',
            },
          ].map((example, idx) => (
            <div key={idx} className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
              <h3 className="mb-4 text-lg font-semibold text-text-primary">{example.title}</h3>
              <div className="space-y-3 text-text-primary leading-relaxed">
                <div>
                  <span className="font-semibold">Problem:</span> {example.problem}
                </div>
                <div>
                  <span className="font-semibold">Solution:</span> {example.solution}
                </div>
                <div>
                  <span className="font-semibold">Result:</span> {example.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          What You Can Expect After Implementation
        </h2>
        <div className="space-y-4 max-w-3xl">
          <ul className="space-y-3">
            {[
              'Faster content production: Ship videos in days instead of weeks',
              'Lower production costs: No studio time, actors, or equipment rentals',
              'Consistent brand voice: Same avatar and voiceover style across all videos',
              'Easy iteration: Test messaging variations quickly without reshooting',
              'Multilingual reach: Generate versions in different languages from the same script',
              'More engagement: Video outperforms text on landing pages, ads, and social media',
              'Reduced bottlenecks: Create video content without coordinating schedules or locations',
              'Professional quality: Studio-grade voiceovers and polished visuals every time',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          How the Process Works
        </h2>
        <div className="space-y-6 max-w-3xl">
          {[
            {
              step: '1. Discovery & Setup',
              desc: 'We discuss your video goals, target audience, and brand voice. You provide scripts or bullet points, reference examples, and any brand assets (logo, colors, fonts).',
            },
            {
              step: '2. Build & Configuration',
              desc: 'I select the right AI voice and avatar style based on your brand. Generate the video, add background music, and apply basic editing (cuts, transitions, captions).',
            },
            {
              step: '3. Testing & Iteration',
              desc: 'You review the first draft and provide feedback. Two rounds of edits are included to adjust pacing, visuals, voiceover tone, or messaging.',
            },
            {
              step: '4. Delivery & Walkthrough',
              desc: 'Final video is delivered in multiple formats (MP4, optimized for web/social). You get source files and guidance on where to publish and how to repurpose the content.',
            },
          ].map((step, idx) => (
            <div key={idx} className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">{step.step}</h3>
              <p className="text-text-primary leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Tools & Technology Used
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            I use a mix of leading AI platforms and custom workflows to deliver studio-quality results:
          </p>
          <ul className="space-y-3">
            <li>
              <span className="font-semibold">AI Voice Platforms</span> — ElevenLabs, Play.ht, or similar for natural-sounding voiceovers with emotion and tone control
            </li>
            <li>
              <span className="font-semibold">AI Avatar Tools</span> — HeyGen, Synthesia, or D-ID for realistic video avatars that sync with voiceovers
            </li>
            <li>
              <span className="font-semibold">Video Editing</span> — Adobe Premiere, Final Cut, or browser-based editors for cuts, transitions, captions, and music
            </li>
            <li>
              <span className="font-semibold">Stock Assets</span> — Royalty-free music and visuals from Epidemic Sound, Artlist, or similar libraries
            </li>
            <li>
              <span className="font-semibold">Custom Code</span> — For bulk video generation, API integrations, or automated caption overlays when needed
            </li>
          </ul>
          <p className="text-text-secondary text-sm">
            Tool choice depends on your goals and existing stack—I adapt to what fits your workflow and budget.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-3xl">
          {[
            {
              q: 'How long does it take to create one video?',
              a: 'Typical turnaround is 48–72 hours for a single video. Rush delivery (24 hours) is available for an additional fee. Timeline depends on script length, revisions, and how quickly you provide feedback.',
            },
            {
              q: 'Do I need to write the script myself?',
              a: 'You can provide a finished script, bullet points, or just the key message. If you need help writing the script, I can draft it for you based on your product or service details (small additional fee may apply).',
            },
            {
              q: 'Can I use my own voice instead of an AI voice?',
              a: 'Yes. If you prefer to record your own voiceover, you can send me an audio file and I\'ll sync it with the avatar visuals. This works great for founders who want their personal voice but don\'t want to appear on camera.',
            },
            {
              q: 'Will the AI avatar look realistic?',
              a: 'AI avatars are getting very close to photorealistic, but they work best for explainer videos, demos, and educational content—not for emotional storytelling or testimonials. I\'ll show you examples during discovery so you know what to expect.',
            },
            {
              q: 'Can I get videos in multiple languages?',
              a: 'Absolutely. Most AI voice platforms support 20+ languages with native-sounding voices. You can either provide translated scripts or I can help arrange translation (translation services billed separately).',
            },
            {
              q: 'What if I don\'t like the first version?',
              a: 'Two rounds of revisions are included in the base price. You can adjust voiceover tone, pacing, visuals, background music, or messaging. If you need major changes beyond two rounds, we can discuss additional revisions at a small hourly rate.',
            },
            {
              q: 'Do I own the final video?',
              a: 'Yes. You receive full rights to use the video for commercial purposes. You get the final video file, source files (when applicable), and any assets used. The only restriction is that you can\'t resell the avatar or voice as a standalone product.',
            },
            {
              q: 'Can this service integrate with my existing content workflow?',
              a: 'Yes. If you already have a CMS, marketing automation platform, or content calendar, I can deliver videos in the right format and help you publish or embed them. For ongoing video needs, we can set up a recurring content series.',
            },
          ].map((faq, idx) => (
            <div key={idx} className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">{faq.q}</h3>
              <p className="text-text-primary leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Next Steps
        </h2>
        <div className="space-y-6 max-w-3xl">
          <p className="text-text-primary leading-relaxed">
            If you think AI video could help you ship content faster and scale your marketing without hiring a full production team, the next step is a short call to see if it's a good fit.
          </p>
          <p className="text-text-primary leading-relaxed">
            We'll discuss your video goals, review examples, and map out a simple plan to get your first videos live. No obligation—just a quick conversation to see if this makes sense for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
              Book a Call
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
            <Link href="/contact#form" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-base font-medium text-text-primary transition-all duration-200 ease-out hover:bg-surface-raised">
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="rounded-md border border-border bg-surface-raised p-8 sm:p-12 text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">
            Skip the camera. Ship the content.
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
            Create My AI Video
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Container>
  );
}
