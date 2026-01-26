const DATA = {
  profile: {
  name: "Mohammed Asad",

  personalEmail: { label: "asadmohd9411@gmail.com", url: "mailto:asadmohd9411@gmail.com", icon: "assets/icons/mail.png" },
  academicEmail: { label: "mohammedasad_ec22a17_47@dtu.ac.in", url: "mailto:mohammedasad_ec22a17_47@dtu.ac.in", icon: "assets/icons/mail.png" },

  github: { label: "GitHub", url: "https://github.com/mdasad7r", icon: "assets/icons/github.png" },
  linkedin: { label: "LinkedIn", url: "https://www.linkedin.com/in/mohammed-asad-deltech", icon: "assets/icons/linkedin.png" },
},


  about: {
  text:
    "I’m a deep learning researcher in the making, focused on one practical question: how do we build AI that generalizes reliably outside curated datasets?" +
    "\n\n" +
    "I started as a builder in high school, making small games and Python projects. In my first semester of college, I switched to C++ and competitive programming to strengthen algorithms and optimization. Soon after, I went deep into AI by studying Stanford lectures by Prof. Andrew Ng, and I built an end-to-end face mask detection system during my third semester. That project hooked me on the mechanics of learning from data, and also exposed what I now study most: why models fail in noisy, uncontrolled settings." +
    "\n\n" +
    "After my sophomore year, I joined the Multi-Modal Research Lab at Delhi Technological University under Prof. Dinesh Kumar Vishwakarma to study person identification in real surveillance conditions. Instead of relying on faces in high-angle, low-resolution CCTV, I explored gait recognition and proposed a compact spatio-temporal framework that combines a CNN frame encoder with a Temporal Kolmogorov–Arnold Network to capture both short- and long-range dynamics. In the summer following my junior year, I co-led a breast cancer detection project with faculty at DTU and IGDTUW, building a hybrid EfficientNetV2 and Vision Mamba model to handle high-resolution mammograms efficiently while preserving diagnostic context. For my senior year thesis, I designed a CPU-only fruit detection and yield estimation pipeline aimed at low-resource agricultural deployment, where efficiency is a constraint, not an afterthought. In my senior year, I interned as a Computer Vision Engineer at Deepsight AI Labs, building agentic AI workflows and custom LLMs for cost and control. As a rising senior during my summer break in 2025, I also collaborated with PhD scholars from Purdue and Penn State on reinforcement learning guided diffusion models, benchmarking stability and transferability. Across these experiences, I repeatedly ran into generalization gaps under changing conditions, and I developed my own solution to improve robustness across domains. Now I’m most excited by neuromorphic computing and machine learning, and robotics, where energy-efficient perception and closed-loop decision making meet. I’m aiming to pursue a PhD at a top-tier program and contribute research that makes intelligent systems dependable in the real world.",
},


  education: [
    {
      school: "Delhi Technological University (DTU)",
      logo: "assets/org/dtu.png",
      when: "2022 to 2026",
      where: "B.Tech (ECE)",
      text: "I completed multiple research projects and internships in deep learning and earned strong letters of recommendation for my work. I also built several electronics hardware projects, strengthening my technical and problem-solving skills. Alongside academics, I contributed as a Technical Team Member in the Mathematics and Computing Society at DTU by supporting and coordinating events, and served as an Education Mentor with Desh Ke Mentor, guiding government school students through structured study plans and regular progress tracking.",
    },
    {
      school: "National Public School (NPS)",
      logo: "assets/org/nps.png",
      when: "School",
      where: "Sr. Secondary School",
      text: "Won a Gold Medal in a Mathematics Olympiad conducted across schools in India, with the in-person medal distribution impacted by COVID-19 lockdown, and also won an English essay writing competition for strong writing and communication skills.",
    },
  ],

  experiences: [
    {
      role: "Computer Vision Engineer Intern",
      orgLine: "Deepsight AI Labs Pvt. Ltd., Gurugram, India",
      when: "AUG'25 to Feb'25",
      logos: ["assets/org/deepsight.png"],
      tags: ["Agentic AI", "LLMs", "NLP", "CV", "Automation", "Predictive Analysis", "Frontend", "Backend"],
      paragraph:
        "I developed custom NLP models, including an in-house language model trained on the company’s proprietary data, to improve how internal information is understood, searched, and used across teams. In parallel, I built a predictive safety system that forecasts the likely alert type, the location it may occur, and the expected time, allowing stakeholders to plan proactively instead of reacting after incidents happen. I also created an agentic AI to support multiple company use cases, contributed independently to computer-vision initiatives, and automated time-consuming manual workflows such as repetitive multi-step terminal command sequences to improve speed, reliability, and productivity.",
    },
    {
      role: "Bachelor's Thesis",
      orgLine: "Delhi Technological University, New Delhi, India",
      when: "SEP'25 to May'26",
      logos: ["assets/org/dtu.png"],
      tags: ["Computer Vision", "RaspberryPi", "Deep Learning"],
      paragraph:
        "As part of my thesis research at DTU, India (Sep 2025 to present), I am extending an orchard fruit detection pipeline into a multi-view 3D yield estimation framework, with the goal of moving from 2D detection to reliable yield quantification across varying viewpoints. I designed and implemented a custom one-stage fruit detector tailored to orchard imagery, using a four-stage convolutional backbone, multi-scale feature fusion, and anchor-based detection heads, while ensuring the training pipeline remains feasible on CPU-only infrastructure for broader reproducibility. To systematically study the impact of attention, I developed an attention-augmented variant (Model A) by inserting a CBAM-style channel and spatial attention block immediately after feature fusion, enabling a clean ablation against the baseline architecture and isolating attention-driven gains. This thesis work is being prepared for submission to ICML 2026.",
    },
    {
      role: "Research Intern, Dr. Dinesh Kumar Vishwakarma(Dept. of IT, DTU)",
      orgLine: "Delhi Technological University, New Delhi, India",
      when: "JUN'24 to NOV'25",
      logos: ["assets/org/dtu.png"],
      tags: ["Computer Vision", "Deep Learning"],
      paragraph:
        "As a Research Intern, I led a campus surveillance research project end to end, building and validating the system on our own CCTV dataset to reflect real deployment conditions. I ran face-versus-gait person re-identification experiments and showed that gait-based cues are more reliable than face recognition in real-world surveillance scenarios, particularly under low resolution, occlusion, and challenging viewpoints. To advance gait re-identification performance, I designed a novel temporal-feature modeling approach that achieved state-of-the-art results across all conditions of the CASIA-B dataset. I also reached state-of-the-art performance on attribute-conditioned subsets of the GREW dataset, including carrying and dressing variations, and I am currently evaluating on the large-scale OU-MVLP dataset to assess broader generalization, cross-view robustness, and scalability. This work is being prepared for submission to an IEEE Transactions venue.",
    },
    {
      role: "Research Intern, Dr. Rahul Katariya (CSE, DTU) and Sudhir Singh (IT, IGDTUW)",
      orgLine: "Delhi Technological University & IGDTUW, New Delhi, India",
      when: "JUN'25 to OCT'25",
      logos: ["assets/org/dtu.png", "assets/org/igdtuw.png"],
      tags: ["Computer Vision", "Deep Learning"],
      paragraph:
        "During my summer research project at Calibre Group under the supervision of Dr. Sudhir Singh, I developed a novel hybrid deep learning model for breast cancer detection that explicitly combines local lesion-level cues with broader global tissue context to improve diagnostic robustness. I led the project end to end, from proposing the core idea and designing the full training and evaluation pipeline to implementing the model and validating it on the CBIS-DDSM dataset, where it achieved superior performance. To ensure the results were rigorous and interpretable, I conducted comprehensive ablation studies to isolate the contribution of each component and performed detailed error analysis to characterize failure modes and guide refinements. This work is being prepared for submission to IEEE Transactions on Medical Imaging (TMI).",
    },
    {
      role: "Research Collaboration Project with PhD scholars from Purdue and Penn State University",
      orgLine: "DTU, India & Purdue, Penn State, USA",
      when: "JAN'25 to MAR'25",
      logos: ["assets/org/dtu.png", "assets/org/purdue.png", "assets/org/pennstate.png"],
      tags: ["Reinforcement Learning", "Diffusion Models", "Deep Learning"],
      paragraph:
        "I collaborated with PhD scholars from Purdue and Penn State University on research exploring diffusion models integrated with reinforcement learning. I investigated RL-guided diffusion for neural weight generation, designing task-specific reward functions to improve model accuracy, training stability, and transfer across downstream tasks. I also implemented and analyzed the baseline RL–diffusion approach, benchmarking its adaptability, scalability, and sampling efficiency across multiple task settings to understand where RL guidance provides the most practical gains.",
    },
    {
      role: "AI/ML Developer",
      orgLine: "Prodigal AI, India",
      when: "JUN'25 to JUL'25",
      logos: ["assets/org/prodigal.png"],
      tags: ["RAG", "LLMs", "NLP", "Automation", "Backend"],
      paragraph:
        "As an AI/ML Developer at Prodigal AI, I worked on retrieval-augmented generation (RAG) and large language model (LLM) pipelines to enable accurate, context-grounded responses over internal knowledge sources. I built and optimized end-to-end workflows spanning document ingestion, chunking, embedding, indexing, and retrieval, and integrated these with LLM prompting and response generation to improve relevance and reduce hallucinations. I also evaluated different retrieval strategies and model configurations, implemented quality and latency improvements, and supported productionization through monitoring, testing, and iteration based on real usage signals.",
    },
    
  ],

  papers: [
    {
      id: "paper-1",
      title: "Gait Recognition",
      meta: "DTU, India",
      diagram: "assets/papers/paper-1/gait_arch.png",
      rows: [
        ["Problem", "Face recognition is unreliable in CCTV due to low resolution, occlusion, and pose, but silhouette-based gait models still struggle to stay accurate under view changes and covariates like bags and clothing, especially with long or noisy sequences."],
        ["Work", "Built a compact gait recognition pipeline: 64×64 silhouettes are normalized and segmented or padded to 50 frames, encoded per-frame by a shared 4-block CNN into 256-D features, then aggregated by a Temporal Kolmogorov–Arnold Network (TKAN) with parallel short-term RKAN sublayers plus a gated long-term memory path, followed by temporal average pooling, dropout, and a softmax classifier over 124 identities."],
        ["What I improved", "Replaced conventional LSTM/Transformer temporal heads with a lightweight, more expressive TKAN that uses edge-wise learnable 1D functions (KAN-style) and a two-scale memory design to capture fast gait-cycle dynamics alongside slower body-context trends, improving robustness to covariates without increasing the CNN backbone."],
        ["Results", "On CASIA-B (subjects 1–74 train, 75–124 test; identical-view excluded), achieved Rank-1 accuracies of 99.52% (NM), 99.56% (BG), 98.82% (CL) with 99.30% average, outperforming same-backbone baselines LSTM (98.06/96.76/92.56) and Transformer (98.86/97.50/95.21), with the largest gain under clothing change; AUC-vs-epoch and training curves show stable convergence and strong separability beyond a single threshold."],
      ],
    },
    {
      id: "paper-2",
      title: "A Hybrid Architecture for Breast Cancer Classification in Mammography",
      meta: "DTU & IGDTUW, India",
      diagram: "assets/papers/paper-2/breast_cancer.png",
      rows: [
        ["Problem", "High resolution mammograms require both fine lesion level detail and broader tissue context, but CNNs tend to be local while Transformer style global modeling is often too expensive for large medical images."],
        ["Work", "Developed a hybrid classifier for CBIS DDSM benign vs malignant detection: preprocess ROI mammograms via deterministic loading, grayscale to 3 channel conversion, resize to 224×224, ImageNet normalization, light train only augmentation, and patient level stratified splits with class weighted loss. The model extracts a 12×12×1280 feature map using an ImageNet pretrained EfficientNetV2 M backbone, patchifies it into tokens with positional embeddings, models long range dependencies using bidirectional Vision Mamba blocks, then applies global average pooling and a sigmoid head for malignancy probability."],
        ["What I improved", "Combined local lesion cues from a strong CNN backbone with linear time global context modeling from a state space model, aiming to capture architectural distortions and broader anatomical patterns without the quadratic cost of self attention, improving practicality for clinical style high resolution imaging."],
        ["Results", "TOn CBIS DDSM, achieved AUC 0.875 with 94.2% accuracy, 0.89 sensitivity, 0.95 specificity, and 0.90 F1, outperforming multiple CNN and Transformer baselines reported in the paper. Ablations show the hybrid improves over EfficientNetV2 M alone (AUC 0.850) and Vision Mamba alone (AUC 0.820), indicating the gain comes from fusing local and global modeling rather than either component by itself."],
      ],
    },
  ],

  projects: [
    {
      id: "project-1",
      title: "Driver Drowsiness Detection using Teensy 4.1",
      meta: "Embedded Systems Lab Project",
      diagram: "assets/projects/project-1/diagram.png",
      rows: [
        ["Problem", "Driver drowsiness is a major road-safety risk, and practical systems must detect sustained eye closure in real time and trigger deterministic alerts on embedded hardware."],
        ["Work", "Built an end-to-end drowsiness detection pipeline using OpenCV-based eye-closure tracking in Python to estimate closure duration over time, then streamed the drowsiness state to a Teensy 4.1 over serial (PySerial). Wrote embedded C on the Teensy to parse the incoming signal and drive buzzer and LED alerts immediately when drowsiness thresholds were met."],
        ["What I improved", "Separated perception and actuation for reliability: vision runs in Python for rapid iteration, while alerting runs on the microcontroller for predictable timing, robust serial handling, and hardware-level signaling suitable for real-world deployment."],
        ["Results", "Demonstrated a working real-time embedded vision safety prototype with stable Python-to-Teensy communication and consistent buzzer and LED triggering upon detected drowsiness events."],
      ],
    },
    {
      id: "project-2",
      title: "Noisy Speech Recognition System",
      meta: "Speech Recognition Course Project",
      diagram: "assets/projects/project-2/diagram.png",
      rows: [
        ["Problem", "Automatic speech recognition degrades sharply in low-SNR settings, where background noise corrupts key spectral cues needed for intelligible transcription."],
        ["Work", "Built a noisy-speech ASR pipeline that first preprocesses audio using FT/STFT-based time–frequency representations and a multi-stage denoising stack to suppress noise while preserving speech cues. Trained and compared multiple ASR architectures, including a custom CNN acoustic model, Bi-LSTM sequence models, Transformer-based ASR, and Whisper, and added LLM-assisted post-processing to refine transcripts."],
        ["What I improved", "Combined signal-level enhancement with model-level diversity: denoising improved the input distribution for downstream recognizers, and cross-model benchmarking plus LLM post-processing improved robustness and readability under challenging noise conditions."],
        ["Results", "Observed improved transcription accuracy and intelligibility in low-SNR audio compared to non-denoised baselines, with the strongest performance achieved by modern sequence/Transformer models (including Whisper) augmented by post-processing."],
      ],
    },
    {
      id: "project-3",
      title: "Temperature-Controlled Fan using Arduino",
      meta: "Analog Electronics Lab Project",
      diagram: "assets/projects/project-3/diagram.png",
      rows: [
        ["Problem", "Server-room or equipment cooling needs responsive temperature regulation to avoid overheating while minimizing unnecessary fan wear and power usage."],
        ["Work", "Built a closed-loop temperature-controlled fan system using an Arduino with a DHT11 sensor for real-time temperature measurement and PWM-based fan speed control. Integrated a 16×2 LCD to display live temperature readings and current fan status, and tuned the control logic for faster, smoother response to temperature changes."],
        ["What I improved", "Moved from fixed-speed cooling to adaptive PWM control, improving efficiency by scaling airflow to demand, while adding on-device observability through the LCD for quick diagnostics and reliable operation."],
        ["Results", "Demonstrated stable real-time temperature tracking with automated fan-speed modulation, reduced unnecessary full-speed operation, and a responsive user-facing display for monitoring system state."],
      ],
    },
    {
      id: "project-4",
      title: "Osteoporosis Detection using CT Scan Images",
      meta: "Signals & Systems Lab Project",
      diagram: "assets/projects/project-4/diagram.png",
      rows: [
        ["Problem", "The objective of the lab project was to select a current research topic in medical imaging, identify state-of-the-art signal-processing approaches for CT-based osteoporosis detection, and translate those ideas into a working MATLAB implementation."],
        ["Work", "Reviewed recent literature to understand SOTA feature-engineering and analysis techniques used for osteoporosis cues in CT scans, then implemented the selected pipeline in MATLAB. Extracted signal-inspired descriptors such as amplitude, frequency, phase, roughness, and contrast, and integrated these engineered features with a CNN-based classifier to evaluate their impact on classification performance."],
        ["What I improved", "Bridged research-to-implementation by reproducing and adapting published signal-processing ideas into a complete, testable pipeline, and validated how domain-specific features complement a CNN’s learned representation."],
        ["Results", "On the lab evaluation setup, adding the signal-based feature set improved classification accuracy from 90% to 100%, supporting the value of the reproduced SOTA-inspired feature design."],
      ],
    },
    {
  id: "project-5",
  title: "End-to-End Face Mask Detection System",
  meta: "Independent Computer Vision Project",
  diagram: "assets/projects/project-5/diagram.png",
  rows: [
    [
      "Problem",
      "Built a complete face mask detection system to automatically classify whether a person is wearing a mask in real time from images or video."
    ],
    [
      "Work",
      "Learned core concepts from Prof. Andrew Ng’s deep learning lectures and independently designed the full pipeline: dataset preparation, preprocessing and augmentation, model selection and training, evaluation, and deployment-ready inference. Implemented the complete codebase and training workflow myself, without relying on pre-built project templates."
    ],
    [
      "What I improved",
      "Strengthened end-to-end problem solving by translating theory into a working system, tuning model performance through iterative experimentation, and building a reliable inference pipeline for real world inputs."
    ],
    [
      "Results",
      "Delivered a working mask detection model with consistent predictions on unseen images and live camera input, demonstrating a complete end-to-end computer vision workflow."
    ],
  ],
},

  ],

  skills: [
    {
      category: "Languages",
      items: [
        { name: "Python", logo: "assets/skills/python.png" },
        { name: "C", logo: "assets/skills/c.png" },
        { name: "C++", logo: "assets/skills/cpp.png" },
        { name: "VHDL", logo: "assets/skills/vhdl.png" },
      ],
    },
    {
      category: "ML and CV",
      items: [
        { name: "PyTorch", logo: "assets/skills/pytorch.png" },
        { name: "TensorFlow", logo: "assets/skills/tensorflow.png" },
        { name: "OpenCV", logo: "assets/skills/opencv.png" },
        { name: "scikit-learn", logo: "assets/skills/sklearn.png" },
        { name: "Numpy", logo: "assets/skills/numpy.png" },
        { name: "pandas", logo: "assets/skills/pandas.png" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", logo: "assets/skills/git.png" },
        { name: "GitHub", logo: "assets/skills/github.png" },
        { name: "VS Code", logo: "assets/skills/vscode.png" },
        { name: "Jupyter", logo: "assets/skills/jupyter.png" },
      ],
    },
    {
      category: "Embedded",
      items: [
        { name: "Arduino", logo: "assets/skills/arduino.png" },
        { name: "Teensy 4.1", logo: "assets/skills/teensy.png" },
        { name: "MATLAB", logo: "assets/skills/matlab.png" },
      ],
    },
  ],

  courses: [
    { category: "ECE", items: ["Analog Electronics", "Communication Systems", "Computer Architecture", "Digital Communication", "Digital Design", "Digital Signal Processing", "Electromagnetics", "Embedded Systems", "Engineering Analysis and Design", "Information Theory and Coding", "Linear Integrated Circuits", "Signals and Systems", "VLSI Design"] },
    { category: "CSE", items: ["Programming Fundamentals", "Data Structures", "Operating Systems", "Computer Networks", "Cloud Computing"] },
    { category: "AI", items: ["Artificial Intelligence and Machine Learning", "Computer Vision", "Neural Networks", "Speech Recognition", "Fuzzy Sets, Logic and Systems & Applications"] },
  ],

  extracurricular: [
    {
      title: "Mathematics and Computing Society, DTU",
      meta: "Technical Team Member | Dec'22 - Dec'23",
      logos: ["assets/org/macs.png"],
      text: "Owned technical operations and helped coordinate virtual and onsite events including conferences, meetups, and chess welfare for the Mathematics and Computing Society at DTU, ensuring smooth execution and reliable support. Facilitated collaboration and problem solving across participants by proactively resolving issues during planning and live sessions.",
    },
    {
      title: "Desh Ke Mentor, Government of NCT of Delhi",
      meta: "Education Mentor | Jan'23 - Aug'23",
      logos: ["assets/org/dkm.png"],
      text:
        "Mentored government school students through Desh Ke Mentor by providing academic support, creating structured study plans, and offering career guidance. Held regular check ins and tracked goals to improve consistency, accountability, and overall learning outcomes.",
    },
    {
      title: "Programming and Algorithms",
      meta: "Coder | Problem Solver",
      logos: ["assets/skills/coding.png"],
      text:
        "Built strong problem solving ability by tackling 200+ advanced, complex DSA challenges across LeetCode, CodeChef, HackerEarth, and GeeksforGeeks, consistently breaking down hard problems into optimized, correct, and clean implementations.",
    },
    {
      title: "Academic Excellence",
      meta: "Top 5% Rank",
      logos: ["assets/org/dtu.png"],
      text: "Ranked in the top 5% of the class in key Computer Science and Engineering (CSE) and Electronics and Communication Engineering (ECE) subjects.",
    },
    {
      title: "Machine Learning and Deep Learning",
      meta: "Coursera | Stanford University",
      logos: ["assets/org/coursera.png", "assets/org/stanford.png"],
      text: "Certified in Machine Learning and Deep Learning (Coursera, Stanford University, Andrew Ng), gaining strong command of core ML algorithms and deep learning techniques through hands on coursework.",
    },


  ],

  contact: {
    line: "For research collaboration and paper access, contact me.",
    availability: "Open to research collaborations and internships.",
    cvUrl: "",
  },
};

function el(id) {
  return document.getElementById(id);
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function blurify(escapedText) {
  let out = String(escapedText);

  const wrap = (txt) =>
    `<span data-blur="1" style="filter: blur(4px); cursor: help; display: inline-block; user-select: none; -webkit-user-select: none;">${txt}</span>`;

  out = out.replace(/Temporal\s+Kolmogorov[–-]Arnold\s+Network/gi, (m) => wrap(m));
  out = out.replace(/Temporal\s+Kolmogorov\s+Arnold\s+Network/gi, (m) => wrap(m));
  out = out.replace(/\bTKAN\b/g, (m) => wrap(m));
  out = out.replace(/\bRKAN\b/g, (m) => wrap(m));
  out = out.replace(/\bKAN\b/g, (m) => wrap(m));

  return out;
}

function redactSensitiveText(text) {
  let out = String(text);
  out = out.replace(/Temporal\s+Kolmogorov[–-]Arnold\s+Network/gi, "[REDACTED]");
  out = out.replace(/Temporal\s+Kolmogorov\s+Arnold\s+Network/gi, "[REDACTED]");
  out = out.replace(/\bTKAN\b/g, "[REDACTED]");
  out = out.replace(/\bRKAN\b/g, "[REDACTED]");
  out = out.replace(/\bKAN\b/g, "[REDACTED]");
  return out;
}

function setupCopyRedaction() {
  if (window.__copyRedactionSetup) return;
  window.__copyRedactionSetup = true;

  document.addEventListener("copy", (e) => {
    const sel = window.getSelection ? window.getSelection() : null;
    if (!sel || sel.isCollapsed) return;

    const raw = sel.toString();
    const redacted = redactSensitiveText(raw);
    if (redacted === raw) return;

    e.preventDefault();
    if (e.clipboardData) {
      e.clipboardData.setData("text/plain", redacted);
    }
  });
}



/* Toast text, uses :) */
/* Toast text, uses :) */
/* Toast text, uses :) */
let toastTimer = 0;
function showToast(text) {
  const t = el("toast");
  if (!t) return;
  t.textContent = text;
  t.style.opacity = "1";
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    t.textContent = "";
    t.style.opacity = "0.9";
  }, 1500);
}

/* Hover tooltip for blurred terms */
let blurTipEl = null;
let blurTipHideTimer = 0;

function setupBlurTip() {
  if (blurTipEl) return;

  blurTipEl = document.createElement("div");
  blurTipEl.id = "blurTip";
  blurTipEl.style.position = "fixed";
  blurTipEl.style.left = "0";
  blurTipEl.style.top = "0";
  blurTipEl.style.transform = "translate3d(-9999px,-9999px,0)";
  blurTipEl.style.padding = "10px 12px";
  blurTipEl.style.borderRadius = "14px";
  blurTipEl.style.fontSize = "13px";
  blurTipEl.style.lineHeight = "1.45";
  blurTipEl.style.maxWidth = "360px";
  blurTipEl.style.pointerEvents = "none";
  blurTipEl.style.zIndex = "9999";
  blurTipEl.style.boxShadow = "0 20px 60px rgba(0,0,0,0.35)";
  blurTipEl.textContent = "Sorry. This paper is currently under submission.";

  document.body.appendChild(blurTipEl);

  const position = (x, y) => {
    const pad = 12;
    const w = blurTipEl.offsetWidth || 260;
    const h = blurTipEl.offsetHeight || 44;
    const nx = Math.min(window.innerWidth - w - pad, Math.max(pad, x + 14));
    const ny = Math.min(window.innerHeight - h - pad, Math.max(pad, y + 14));
    blurTipEl.style.transform = `translate3d(${nx}px, ${ny}px, 0)`;
  };

  const setTheme = () => {
    const isLight = document.documentElement.dataset.theme === "light";
    blurTipEl.style.background = isLight ? "rgba(255,255,255,0.96)" : "rgba(11,16,32,0.96)";
    blurTipEl.style.color = isLight ? "rgba(12,18,28,0.92)" : "rgba(255,255,255,0.92)";
    blurTipEl.style.border = isLight ? "1px solid rgba(12,18,28,0.12)" : "1px solid rgba(255,255,255,0.14)";
  };

  const show = (x, y) => {
    clearTimeout(blurTipHideTimer);
    setTheme();
    position(x, y);
    blurTipEl.style.opacity = "1";
  };

  const hide = () => {
    clearTimeout(blurTipHideTimer);
    blurTipHideTimer = window.setTimeout(() => {
      if (!blurTipEl) return;
      blurTipEl.style.transform = "translate3d(-9999px,-9999px,0)";
      blurTipEl.style.opacity = "0";
    }, 120);
  };

  document.addEventListener(
    "pointerover",
    (e) => {
      const t = e.target instanceof Element ? e.target.closest('[data-blur="1"]') : null;
      if (!t) return;
      show(e.clientX, e.clientY);
    },
    { passive: true }
  );

  document.addEventListener(
    "pointermove",
    (e) => {
      if (!blurTipEl) return;
      if (blurTipEl.style.opacity !== "1") return;
      position(e.clientX, e.clientY);
    },
    { passive: true }
  );

  document.addEventListener(
    "pointerout",
    (e) => {
      const from = e.target instanceof Element ? e.target.closest('[data-blur="1"]') : null;
      const to = e.relatedTarget instanceof Element ? e.relatedTarget.closest('[data-blur="1"]') : null;
      if (from && !to) hide();
    },
    { passive: true }
  );

  window.addEventListener("scroll", hide, { passive: true });
}


/* Modal popup (center) */
let modalOverlay = null;

function setupModal() {
  if (modalOverlay) return;

  modalOverlay = document.createElement("div");
  modalOverlay.id = "modalOverlay";
  modalOverlay.setAttribute("role", "dialog");
  modalOverlay.setAttribute("aria-modal", "true");
  modalOverlay.style.position = "fixed";
  modalOverlay.style.inset = "0";
  modalOverlay.style.display = "none";
  modalOverlay.style.alignItems = "center";
  modalOverlay.style.justifyContent = "center";
  modalOverlay.style.padding = "18px";
  modalOverlay.style.zIndex = "9999";
  modalOverlay.style.backdropFilter = "blur(8px)";

  modalOverlay.innerHTML = `
    <div id="modalCard" style="width:min(560px, 92vw); border-radius:16px; border:1px solid rgba(255,255,255,0.14); background:#0b1020; color:rgba(255,255,255,0.92); box-shadow:0 30px 90px rgba(0,0,0,0.55); padding:18px;">
      <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px;">
        <div>
          <div id="modalTitle" style="font-weight:800; letter-spacing:-0.02em; font-size:18px; margin:0 0 8px;">Access Restricted</div>
          <div id="modalMessage" style="color:rgba(255,255,255,0.78); font-size:14px; line-height:1.6;"></div>
        </div>
        <button id="modalCloseX" type="button" aria-label="Close" style="border:1px solid rgba(255,255,255,0.14); background:rgba(255,255,255,0.06); color:inherit; border-radius:12px; width:36px; height:36px; cursor:pointer;">X</button>
      </div>
      <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:16px;">
        <button id="modalCloseBtn" type="button" style="border:1px solid rgba(255,255,255,0.14); background:rgba(255,255,255,0.06); color:inherit; border-radius:999px; padding:10px 14px; cursor:pointer;">Close</button>
      </div>
    </div>
  `;

  document.body.appendChild(modalOverlay);

  function close() {
    modalOverlay.style.display = "none";
    document.body.style.overflow = "";
  }

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) close();
  });

  modalOverlay.querySelector("#modalCloseX").addEventListener("click", close);
  modalOverlay.querySelector("#modalCloseBtn").addEventListener("click", close);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.style.display !== "none") close();
  });
}

function showModal(message, title = "Access Restricted") {
  setupModal();

  const root = document.documentElement;
  const isLight = root.dataset.theme === "light";

  modalOverlay.style.background = isLight ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.60)";

  const card = modalOverlay.querySelector("#modalCard");
  const titleEl = modalOverlay.querySelector("#modalTitle");
  const msgEl = modalOverlay.querySelector("#modalMessage");

  const closeX = modalOverlay.querySelector("#modalCloseX");
  const closeBtn = modalOverlay.querySelector("#modalCloseBtn");

  if (isLight) {
    card.style.background = "#ffffff";
    card.style.color = "rgba(12,18,28,0.92)";
    card.style.border = "1px solid rgba(12,18,28,0.14)";
    card.style.boxShadow = "0 30px 90px rgba(14,20,30,0.20)";
    msgEl.style.color = "rgba(12,18,28,0.72)";

    closeX.style.border = "1px solid rgba(12,18,28,0.14)";
    closeX.style.background = "rgba(12,18,28,0.06)";
    closeBtn.style.border = "1px solid rgba(12,18,28,0.14)";
    closeBtn.style.background = "rgba(12,18,28,0.06)";
  } else {
    card.style.background = "#0b1020";
    card.style.color = "rgba(255,255,255,0.92)";
    card.style.border = "1px solid rgba(255,255,255,0.14)";
    card.style.boxShadow = "0 30px 90px rgba(0,0,0,0.55)";
    msgEl.style.color = "rgba(255,255,255,0.78)";

    closeX.style.border = "1px solid rgba(255,255,255,0.14)";
    closeX.style.background = "rgba(255,255,255,0.06)";
    closeBtn.style.border = "1px solid rgba(255,255,255,0.14)";
    closeBtn.style.background = "rgba(255,255,255,0.06)";
  }

  titleEl.textContent = title;
  msgEl.textContent = message;

  modalOverlay.style.display = "flex";
  document.body.style.overflow = "hidden";
}


/* Theme */
function setupTheme() {
  const root = document.documentElement;
  const key = "theme";
  const toggle = el("themeToggle");

  function initial() {
    const saved = localStorage.getItem(key);
    if (saved === "dark" || saved === "light") return saved;
    const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    return prefersLight ? "light" : "dark";
  }

  function apply(theme) {
    root.dataset.theme = theme;
    if (toggle) toggle.checked = theme === "light";
  }

  apply(initial());

  if (!toggle) return;
  toggle.addEventListener("change", () => {
    const next = toggle.checked ? "light" : "dark";
    localStorage.setItem(key, next);
    apply(next);
  });
}

/* Spotlight */
function setupSpotlight() {
  const root = document.documentElement;
  let raf = 0;
  function onMove(e) {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      root.style.setProperty("--mx", `${x}%`);
      root.style.setProperty("--my", `${y}%`);
      raf = 0;
    });
  }
  window.addEventListener("pointermove", onMove, { passive: true });
}

/* Progress */
function setupProgress() {
  const bar = el("progressBar");
  function onScroll() {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;
    const p = height > 0 ? scrollTop / height : 0;
    bar.style.transform = `scaleX(${p})`;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* Profile image fallback */
function setupProfileFallback() {
  const img = el("profileImg");
  if (!img) return;

  img.addEventListener(
    "error",
    () => {
      const svg = encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#8AF7FF" stop-opacity="0.35"/>
            <stop offset="1" stop-color="#B8A7FF" stop-opacity="0.25"/>
          </linearGradient>
        </defs>
        <rect width="800" height="800" fill="url(#g)"/>
        <circle cx="400" cy="320" r="140" fill="rgba(255,255,255,0.18)"/>
        <rect x="180" y="520" width="440" height="180" rx="90" fill="rgba(255,255,255,0.16)"/>
      </svg>
    `);
      img.src = `data:image/svg+xml,${svg}`;
    },
    { once: true }
  );
}

/* Reveal (observe after content is rendered) */
function setupReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      }
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((node) => io.observe(node));
}

/* Render */
function renderProfile() {
  el("profileName").textContent = DATA.profile.name;

  el("profileEmails").innerHTML = `
  <a class="profileLink" href="${escapeHtml(DATA.profile.personalEmail.url)}">
    <img class="profileLink__icon" src="${escapeHtml(DATA.profile.personalEmail.icon)}" alt="" />
    <span class="profileLink__text">${escapeHtml(DATA.profile.personalEmail.label)}</span>
  </a>

  <a class="profileLink" href="${escapeHtml(DATA.profile.academicEmail.url)}">
    <img class="profileLink__icon" src="${escapeHtml(DATA.profile.academicEmail.icon)}" alt="" />
    <span class="profileLink__text">${escapeHtml(DATA.profile.academicEmail.label)}</span>
  </a>
`;


  el("profileLinks").innerHTML = `
    <a class="profileLink" href="${escapeHtml(DATA.profile.github.url)}" target="_blank" rel="noreferrer">
      <img class="profileLink__icon" src="${escapeHtml(DATA.profile.github.icon)}" alt="" />
      <span class="profileLink__text">${escapeHtml(DATA.profile.github.label)}</span>
    </a>
    <a class="profileLink" href="${escapeHtml(DATA.profile.linkedin.url)}" target="_blank" rel="noreferrer">
      <img class="profileLink__icon" src="${escapeHtml(DATA.profile.linkedin.icon)}" alt="" />
      <span class="profileLink__text">${escapeHtml(DATA.profile.linkedin.label)}</span>
    </a>
  `;
}

function renderAbout() {
  const parts = DATA.about.text
  .split("\n\n")
  .map((p) => `<p style="margin:0 0 12px;">${blurify(escapeHtml(p))}</p>`)
  .join("");
  el("aboutText").innerHTML = parts;
}

function renderEducation() {
  el("educationList").innerHTML = DATA.education
    .map(
      (e) => `
    <div class="eduItem">
      <div class="logoBig"><img src="${escapeHtml(e.logo)}" alt="" /></div>

      <div class="eduMain">
        <h3 class="eduTitle">${escapeHtml(e.school)}</h3>
        <p class="eduText"><strong>${escapeHtml(e.where)}</strong><br />${escapeHtml(e.text)}</p>
      </div>

      <div class="timeBox">
        <div class="timeWhen">${escapeHtml(e.when)}</div>
        <div class="timeWhere">${escapeHtml(e.where)}</div>
      </div>
    </div>
  `
    )
    .join("");
}

function renderExperience() {
  el("experienceList").innerHTML = DATA.experiences
    .map((x) => {
      const gridClass = (x.logos || []).length <= 1 ? "logoGrid single" : "logoGrid";
      const logos = (x.logos || [])
        .map((src) => `<div class="logoBox"><img src="${escapeHtml(src)}" alt="" /></div>`)
        .join("");

      const tags = (x.tags || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");

      return `
      <div class="xpItem reveal">
        <div class="${gridClass}">${logos}</div>

        <div class="xpMain">
          <h3 class="xpRole">${escapeHtml(x.role)}</h3>
          <p class="xpOrg">${escapeHtml(x.orgLine)}</p>
          <p class="xpPara">${blurify(escapeHtml(x.paragraph))}</p>
          <div class="tagRow">${tags}</div>
        </div>

        <div class="timeBox xpTimeBox">
          <div class="timeWhen">${escapeHtml(x.when)}</div>
        </div>
      </div>
    `;
    })
    .join("");
}

function diagramHtml(src) {
  if (!src) return `<div class="diagram"><div class="diagramPlaceholder">TODO: Add diagram image.</div></div>`;
  return `<div class="diagram"><img src="${escapeHtml(src)}" alt="Diagram" /></div>`;
}

function renderWork(listId, items, lockedLabel) {
  el(listId).innerHTML = items
    .map((it) => {
      const rows = (it.rows || [])
        .map(
          (r) => `
      <div class="row">
        <div class="key">${escapeHtml(r[0])}</div>
        <div class="val">${blurify(escapeHtml(r[1]))}</div>
      </div>
    `
        )
        .join("");

      return `
      <article class="workCard reveal">
        <div class="workBody">
          <h3 class="workTitle">${escapeHtml(it.title)}</h3>
          <p class="workMeta">${escapeHtml(it.meta)}</p>
        </div>

        ${diagramHtml(it.diagram)}

        <div class="workBody">
          <div class="block">${rows}</div>
          <div class="actions">
            <button class="pillBtn" type="button" data-locked="1">${escapeHtml(lockedLabel)}</button>
          </div>
        </div>
      </article>
    `;
    })
    .join("");
}

function renderSkills() {
  el("skillsWrap").innerHTML = DATA.skills
    .map((cat) => {
      const items = (cat.items || [])
        .map(
          (s) => `
      <div class="skillItem" title="${escapeHtml(s.name)}">
        <img src="${escapeHtml(s.logo)}" alt="${escapeHtml(s.name)} logo" />
        <span>${escapeHtml(s.name)}</span>
      </div>
    `
        )
        .join("");

      return `
      <div class="skillCat reveal">
        <div class="skillCatHead">
          <div class="skillCatTitle">${escapeHtml(cat.category)}</div>
          <div class="muted tiny">${escapeHtml((cat.items || []).length)} items</div>
        </div>
        <div class="skillGrid">${items}</div>
      </div>
    `;
    })
    .join("");
}

function renderCourses() {
  el("coursesWrap").innerHTML = DATA.courses
    .map((c) => {
      const items = (c.items || []).map((x) => `<li>${escapeHtml(x)}</li>`).join("");
      return `
      <article class="courseCard reveal">
        <div class="courseHead">
          <div class="courseTitle">${escapeHtml(c.category)}</div>
        </div>
        <ul class="courseList">${items}</ul>
      </article>
    `;
    })
    .join("");
}

function renderExtracurricular() {
  el("extraWrap").innerHTML = DATA.extracurricular
    .map((x) => {
      const logos = (x.logos || [])
        .map((src) => `<div class="extraLogo"><img src="${escapeHtml(src)}" alt="" /></div>`)
        .join("");

      return `
      <article class="extraCard reveal">
        <div class="extraTop">
          ${logos}
          <div>
            <div class="extraTitle">${escapeHtml(x.title)}</div>
            <div class="extraMeta">${escapeHtml(x.meta)}</div>
          </div>
        </div>
        <div class="block">
          <div class="row">
            <div class="key">Work</div>
            <div class="val">${escapeHtml(x.text)}</div>
          </div>
        </div>
      </article>
    `;
    })
    .join("");
}

function renderContact() {
  el("collabLine").textContent = DATA.contact.line;

  const a = el("collabAvailability");
  if (a) a.textContent = DATA.contact.availability || "";

  const personal = DATA.profile.personalEmail.label;
  const academic = DATA.profile.academicEmail.label;

  const cvAction = DATA.contact.cvUrl
    ? `<a class="pillBtn" href="${escapeHtml(DATA.contact.cvUrl)}" target="_blank" rel="noreferrer">Download CV</a>`
    : `<button class="pillBtn" type="button" data-locked="1">Download CV</button>`;

  el("collabActions").innerHTML = `
    <a class="pillBtn" href="${escapeHtml(DATA.profile.personalEmail.url)}">Email me</a>
    ${cvAction}
    <button class="pillBtn" type="button" data-copy="${escapeHtml(personal)}">Copy personal email</button>
    <button class="pillBtn" type="button" data-copy="${escapeHtml(academic)}">Copy academic email</button>
  `;
}

/* Interactions */

function setupInteractions() {
  document.body.addEventListener("click", async (e) => {
    const node = e.target instanceof Element ? e.target.closest("[data-locked],[data-copy]") : null;
    if (!(node instanceof HTMLElement)) return;

    if (node.getAttribute("data-locked")) {
      showToast("Access is restricted. Please contact me to request access.");
      return;
    }

    const value = node.getAttribute("data-copy");
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
      showToast("Copied.");
    } catch {
      showToast("Copy failed. Please copy manually.");
    }
  });
}


/* Init */
/* Nav scrollspy */
function setupScrollSpy() {
  const links = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
  if (!links.length) return;

  const linkById = new Map();
  for (const a of links) {
    const href = a.getAttribute("href") || "";
    const id = href.startsWith("#") ? href.slice(1) : "";
    if (id) linkById.set(id, a);
  }

  const sections = Array.from(linkById.keys())
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!sections.length) return;

  let active = "";
  function setActive(id) {
    if (!id || id === active) return;
    active = id;
    for (const a of links) {
      const href = a.getAttribute("href") || "";
      a.classList.toggle("is-active", href === `#${id}`);
    }
  }

  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((x) => x.isIntersecting)
        .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
      if (visible && visible.target && visible.target.id) setActive(visible.target.id);
    },
    { threshold: [0.2, 0.35, 0.5], rootMargin: "-30% 0px -60% 0px" }
  );

  for (const s of sections) io.observe(s);

  const initial = (location.hash || "").replace("#", "");
  if (initial && linkById.has(initial)) setActive(initial);
  else setActive(sections[0].id);

  window.addEventListener("hashchange", () => {
    const id = (location.hash || "").replace("#", "");
    if (id && linkById.has(id)) setActive(id);
  });
}

/* Back to top button */
function setupBackToTop() {
  const btn = el("toTopBtn");
  if (!btn) return;

  function onScroll() {
    btn.classList.toggle("is-visible", window.scrollY > 650);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* Card hover light (subtle, cursor-driven) */
function setupCardHoverFX() {
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const sel =
    ".profileCard,.heroRight,.eduMain,.timeBox,.xpMain,.workCard,.skillCat,.courseCard,.extraCard,.cta,.section.sectionBox";

  const cards = Array.from(document.querySelectorAll(sel));
  if (!cards.length) return;

  for (const card of cards) {
    let raf = 0;
    let hx = 50;
    let hy = 30;

    function apply() {
      card.style.setProperty("--hx", `${hx}%`);
      card.style.setProperty("--hy", `${hy}%`);
      raf = 0;
    }

    card.addEventListener(
      "pointermove",
      (e) => {
        const r = card.getBoundingClientRect();
        if (!r.width || !r.height) return;

        hx = ((e.clientX - r.left) / r.width) * 100;
        hy = ((e.clientY - r.top) / r.height) * 100;

        if (!raf) raf = requestAnimationFrame(apply);
      },
      { passive: true }
    );

    card.addEventListener("pointerleave", () => {
      card.style.removeProperty("--hx");
      card.style.removeProperty("--hy");
    });
  }
}

/* Init */

(function init() {
  setupTheme();
  setupSpotlight();
  setupProgress();
  setupProfileFallback();
  setupInteractions();
  setupScrollSpy();
  setupBackToTop();

  renderProfile();
  renderAbout();
  renderEducation();
  renderExperience();
  renderWork("papersList", DATA.papers, "Read paper");
  renderWork("projectsList", DATA.projects, "View project");
  renderSkills();
  renderCourses();
  renderExtracurricular();
  renderContact();

  // IMPORTANT: reveal must be initialized after rendering
  setupReveal();
  setupCardHoverFX();

  el("year").textContent = String(new Date().getFullYear());
})();

