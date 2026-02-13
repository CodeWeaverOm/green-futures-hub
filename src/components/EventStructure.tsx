import { FileText, Video, Cloud, ClipboardList, AlertTriangle, BarChart3, CheckCircle2 } from "lucide-react";

const pptSlides = [
  "Title Slide (Team Name, Members, Domain)",
  "Problem Statement",
  "Background & Need of the Problem",
  "Target Users / Audience",
  "Existing Solutions & Their Limitations",
  "Proposed Idea / Solution",
  "System Architecture (Block Diagram)",
  "Proposed Tech Stack (Conceptual)",
  "Workflow / Data Flow Diagram",
  "Use Cases",
  "Innovation & Key Advantages",
  "Future Scope & Scalability",
];

const videoTips = [
  "At least one team member must appear in the video",
  "Clearly explain: Problem, Solution, Technical approach, System architecture, Expected impact",
  "Speak confidently with clear and structured explanation",
  "Ensure proper audio quality",
  "Do not exceed 10 minutes",
];

const driveSteps = [
  "Upload the video file to Google Drive",
  "Right-click on the uploaded file → Click \"Get Link\"",
  "Change access to: \"Anyone with the link can view\"",
  "Copy the public sharing link",
];

const formSteps = [
  "Fill out the official Tek_Sakshma 2026 Registration Form",
  "Enter all team details carefully",
  "Paste your Google Drive video link in the submission field",
  "Submit before the deadline",
];

const evaluationCriteria = [
  { label: "Problem Relevance & Clarity", marks: 20 },
  { label: "Innovation & Creativity", marks: 20 },
  { label: "Technical Design Logic", marks: 20 },
  { label: "Feasibility & Practicality", marks: 15 },
  { label: "PPT Structure & Clarity", marks: 10 },
  { label: "Video Explanation", marks: 15 },
];

const importantRules = [
  "Only one submission per team",
  "Ensure correct team member details",
  "Plagiarism will lead to disqualification",
  "Video must be original and created by the team",
];

const round2Items = [
  "10 minute live pitch presentation",
  "5 minute Q&A with judges",
  "Final round at venue",
  "Date: 14 March 2026",
];

const EventStructure = () => {
  return (
    <section id="events" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 gradient-text">Event Structure</h2>
        <div className="section-divider max-w-xs mx-auto mb-12" />

        {/* Round 1 Detailed Section */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/20 text-primary mb-4">
            ROUND 1
          </span>
          <h3 className="text-2xl font-bold text-foreground mb-2">Idea Submission Guidelines</h3>
          <p className="text-muted-foreground mb-8">
            Round 1 focuses on evaluating the originality, clarity, technical understanding, and feasibility of your idea. This round is completely based on conceptual design and structured presentation.
          </p>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Step 1: PPT */}
            <div className="rounded-xl border border-border bg-secondary/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-medium">Step 1</span>
                  <h4 className="text-base font-semibold text-foreground">Prepare Your PPT (10–12 Slides)</h4>
                </div>
              </div>
              <ul className="space-y-2">
                {pptSlides.map((slide, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {slide}
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 rounded-lg bg-accent/10 border border-accent/20">
                <p className="text-xs text-accent flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  Slides must be clean, professional, with clearly visible diagrams and concise content.
                </p>
              </div>
            </div>

            {/* Step 2: Video */}
            <div className="rounded-xl border border-border bg-secondary/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Video className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-medium">Step 2</span>
                  <h4 className="text-base font-semibold text-foreground">Record a Video (5–10 Min)</h4>
                </div>
              </div>
              <ul className="space-y-2">
                {videoTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 3: Drive */}
            <div className="rounded-xl border border-border bg-secondary/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-medium">Step 3</span>
                  <h4 className="text-base font-semibold text-foreground">Upload Video to Google Drive</h4>
                </div>
              </div>
              <ul className="space-y-2">
                {driveSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {step}
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                <p className="text-xs text-destructive flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  If the link is not public, your submission may not be evaluated.
                </p>
              </div>
            </div>

            {/* Step 4: Google Form */}
            <div className="rounded-xl border border-border bg-secondary/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-medium">Step 4</span>
                  <h4 className="text-base font-semibold text-foreground">Submit Through Google Form</h4>
                </div>
              </div>
              <ul className="space-y-2">
                {formSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {step}
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm font-semibold text-primary">📅 Deadline: 05 March 2026</p>
                <p className="text-xs text-muted-foreground">Late submissions will not be accepted.</p>
              </div>
            </div>
          </div>

          {/* Evaluation Criteria */}
          <div className="rounded-xl border border-border bg-secondary/30 p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-foreground">Evaluation Criteria (100 Marks)</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {evaluationCriteria.map((c) => (
                <div key={c.label} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                  <span className="text-sm text-muted-foreground">{c.label}</span>
                  <span className="text-sm font-bold text-primary">{c.marks}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Important Rules */}
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <h4 className="text-lg font-semibold text-foreground">Important Instructions</h4>
            </div>
            <ul className="space-y-2">
              {importantRules.map((rule, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-primary-foreground font-semibold text-lg"
            >
              <ClipboardList className="w-5 h-5" />
              Submit Round 1 via Google Form
            </a>
          </div>
        </div>

        {/* Round 2 Card */}
        <div className="glass-card rounded-2xl p-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/20 text-primary mb-4">
            ROUND 2
          </span>
          <h3 className="text-2xl font-bold text-foreground mb-6">Grand Finale</h3>
          <ul className="space-y-3">
            {round2Items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EventStructure;
