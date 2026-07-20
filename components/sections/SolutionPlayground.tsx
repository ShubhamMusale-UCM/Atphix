'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Bot, Smartphone, Layout, Workflow, Sparkles, Play, CheckCircle2 } from 'lucide-react';

export const SolutionPlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ai' | 'web' | 'mobile' | 'workflow'>('ai');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simOutput, setSimOutput] = useState<string[]>([]);

  const tabs = [
    { id: 'ai', label: 'AI Autonomous Agents', icon: <Bot className="w-4 h-4" /> },
    { id: 'web', label: 'Custom Web Apps', icon: <Layout className="w-4 h-4" /> },
    { id: 'mobile', label: 'Mobile Apps (React Native)', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'workflow', label: 'Workflow Engines', icon: <Workflow className="w-4 h-4" /> },
  ];

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimOutput(['Initializing sandbox environment...', 'Connecting to vector store index...']);

    setTimeout(() => {
      setSimOutput((prev) => [...prev, 'Running multi-agent RAG reasoning loop...']);
    }, 600);

    setTimeout(() => {
      setSimOutput((prev) => [
        ...prev,
        '✓ Agent execution complete in 24ms.',
        'Output: Task automated successfully with 100% deterministic precision.',
      ]);
      setIsSimulating(false);
    }, 1400);
  };

  return (
    <section className="py-28 px-6 relative z-10 bg-[--atphix-surface]/20 border-y border-[--atphix-border]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="caption-text text-[--atphix-accent-1] tracking-[0.12em] block">
            INTERACTIVE SYSTEM DEMO
          </span>
          <h2 className="display-title text-white">Experience Our Engineering Capabilities Live</h2>
          <p className="body-lg text-[--atphix-text-mid]">
            Select a solution domain below to inspect architectural logic, agent execution loops, and code patterns.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[--atphix-accent-1] text-[--atphix-void] shadow-[0_0_20px_rgba(0,240,255,0.4)] font-bold'
                  : 'bg-[--atphix-surface] border border-[--atphix-border] text-[--atphix-text-mid] hover:text-white hover:border-[--atphix-accent-1]/40'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[--atphix-void] rounded-3xl border border-[--atphix-border] p-6 md:p-10 shadow-2xl">
          {/* Left Column: Technical Overview */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {activeTab === 'ai' && (
                  <>
                    <span className="text-xs font-mono text-[--atphix-accent-1]">MODULE 01 // AGENTIC ARCHITECTURE</span>
                    <h3 className="font-heading text-2xl font-bold text-white">Autonomous LLM Reasoning Loops</h3>
                    <p className="text-sm text-[--atphix-text-mid] leading-relaxed">
                      We construct deterministic multi-agent networks where specialized agents collaborate: one parses context, another queries vector memory, and a third executes function tools.
                    </p>
                    <ul className="space-y-2 text-xs text-white">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[--atphix-accent-1]" /> Sub-30ms Vector Memory Retrieval
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[--atphix-accent-1]" /> Guardrail & Safety Assertions
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[--atphix-accent-1]" /> Local Ollama or Cloud Model Failover
                      </li>
                    </ul>
                  </>
                )}

                {activeTab === 'web' && (
                  <>
                    <span className="text-xs font-mono text-[--atphix-accent-2]">MODULE 02 // NEXT.JS 15 SYSTEM</span>
                    <h3 className="font-heading text-2xl font-bold text-white">Ultra-Responsive Web Platforms</h3>
                    <p className="text-sm text-[--atphix-text-mid] leading-relaxed">
                      Built with Next.js 15, React 19, custom CSS token architectures, and Server Actions for instantaneous user response and seamless global deployment.
                    </p>
                    <ul className="space-y-2 text-xs text-white">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[--atphix-accent-2]" /> Server Components & Edge Cache
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[--atphix-accent-2]" /> 60fps Kinetic Animations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[--atphix-accent-2]" /> Zero Layout Shift (CLS = 0)
                      </li>
                    </ul>
                  </>
                )}

                {activeTab === 'mobile' && (
                  <>
                    <span className="text-xs font-mono text-[--atphix-accent-1]">MODULE 03 // REACT NATIVE EXPO</span>
                    <h3 className="font-heading text-2xl font-bold text-white">Native Mobile Performance</h3>
                    <p className="text-sm text-[--atphix-text-mid] leading-relaxed">
                      Unified React Native codebases delivering iOS and Android native apps with biometric authentication, offline SQLite sync, and smooth gesture animations.
                    </p>
                    <ul className="space-y-2 text-xs text-white">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[--atphix-accent-1]" /> Hermes JS Engine Optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[--atphix-accent-1]" /> Native Hardware Acceleration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[--atphix-accent-1]" /> Automated App Store CI/CD
                      </li>
                    </ul>
                  </>
                )}

                {activeTab === 'workflow' && (
                  <>
                    <span className="text-xs font-mono text-[--atphix-accent-2]">MODULE 04 // PIPELINE AUTOMATION</span>
                    <h3 className="font-heading text-2xl font-bold text-white">Enterprise Process Engines</h3>
                    <p className="text-sm text-[--atphix-text-mid] leading-relaxed">
                      Eliminate human error by connecting CRMs, ERPs, webhooks, and databases into self-healing, asynchronous workflow loops.
                    </p>
                    <ul className="space-y-2 text-xs text-white">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[--atphix-accent-2]" /> Asynchronous Queue Redundancy
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[--atphix-accent-2]" /> Automatic API Rate Limit Handling
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[--atphix-accent-2]" /> Instant Error Alerting & Logs
                      </li>
                    </ul>
                  </>
                )}

                <button
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  className="mt-4 flex items-center gap-2 px-6 py-3 rounded-xl bg-[--atphix-accent-1] text-[--atphix-void] font-bold text-sm hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50"
                >
                  <Play className="w-4 h-4 fill-current" />
                  {isSimulating ? 'Simulating Exec...' : 'Run Live Architecture Simulation'}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Simulated Terminal Code Window */}
          <div className="lg:col-span-7 bg-black rounded-2xl border border-[--atphix-border] p-5 font-mono text-xs overflow-hidden shadow-inner space-y-4">
            <div className="flex items-center justify-between border-b border-[--atphix-border]/60 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-[11px] text-[--atphix-text-mid] ml-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[--atphix-accent-1]" /> atphix-runtime://{activeTab}-engine
                </span>
              </div>
              <span className="text-[10px] text-[--atphix-accent-1] bg-[--atphix-accent-1]/10 px-2 py-0.5 rounded">
                STATUS: READY
              </span>
            </div>

            {/* Code / Output Preview */}
            <div className="space-y-2 text-gray-300 min-h-[220px] max-h-[260px] overflow-y-auto">
              <p className="text-gray-500">// Atphix System Execution Environment</p>
              <p className="text-[--atphix-accent-1]">import {'{ AgentOrchestrator, RAGVectorIndex }'} from &apos;@atphix/core&apos;;</p>

              {activeTab === 'ai' && (
                <div className="text-emerald-400 space-y-1">
                  <p>const agent = new AgentOrchestrator({'{'} model: &apos;gpt-4o&apos;, RAG: true {'}'});</p>
                  <p>await agent.deployAutonomousWorkflow({'{'} memory: &apos;pinecone-v3&apos; {'}'});</p>
                </div>
              )}

              {activeTab === 'web' && (
                <div className="text-cyan-400 space-y-1">
                  <p>export default async function Page() {'{'}</p>
                  <p className="pl-4">const data = await fetchEdgeData();</p>
                  <p className="pl-4">return &lt;InteractiveCanvas data={'{data}'} /&gt;;</p>
                  <p>{'}'}</p>
                </div>
              )}

              {activeTab === 'mobile' && (
                <div className="text-purple-400 space-y-1">
                  <p>const App = () =&gt; (</p>
                  <p className="pl-4">&lt;GestureHandlerRootView style={'{styles.flex}'}&gt;</p>
                  <p className="pl-8">&lt;ReanimatedView animation=&quot;spring&quot; /&gt;</p>
                  <p className="pl-4">&lt;/GestureHandlerRootView&gt;</p>
                  <p>);</p>
                </div>
              )}

              {activeTab === 'workflow' && (
                <div className="text-yellow-400 space-y-1">
                  <p>const workflow = new WorkflowPipeline(&apos;lead-enrichment&apos;);</p>
                  <p>workflow.addTrigger(&apos;webhook.received&apos;);</p>
                  <p>workflow.addStep(&apos;ai-extract&apos;).addStep(&apos;crm-sync&apos;);</p>
                </div>
              )}

              {/* Live simulation output logs */}
              {simOutput.map((line, idx) => (
                <p key={idx} className="text-yellow-300 animate-fade-in pt-1">
                  &gt; {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
