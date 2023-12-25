"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1864],{9401:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=s(5893),t=s(1151);const r={title:"Watch Mode"},l=void 0,o={id:"guides/watch-mode",title:"Watch Mode",description:"Developers often find themselves in situations where they need to run a server in watch mode to streamline the development process. This guide will introduce you to [entr], a versatile file-watcher tool, and demonstrate how to run your server in watch mode with it. We'll also touch on the installation process and suggest some best practices to optimize your workflow.",source:"@site/docs/guides/watch-mode.md",sourceDirName:"guides",slug:"/guides/watch-mode",permalink:"/docs/guides/watch-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/guides/watch-mode.md",tags:[],version:"current",frontMatter:{title:"Watch Mode"},sidebar:"tutorialSidebar",previous:{title:"Tackling N + 1",permalink:"/docs/guides/n+1"},next:{title:"Operators",permalink:"/docs/operators/"}},c={},a=[{value:"Use case",id:"use-case",level:2},{value:"Using <code>entr</code>",id:"using-entr",level:2},{value:"Installation",id:"installation",level:3},{value:"Homebrew",id:"homebrew",level:4},{value:"Windows Subsystem",id:"windows-subsystem",level:4},{value:"apt-get",id:"apt-get",level:4},{value:"Watch Mode",id:"watch-mode",level:3},{value:"Some Best Practices",id:"some-best-practices",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Developers often find themselves in situations where they need to run a server in watch mode to streamline the development process. This guide will introduce you to ",(0,i.jsx)(n.a,{href:"https://eradman.com/entrproject/",children:"entr"}),", a versatile file-watcher tool, and demonstrate how to run your server in watch mode with it. We'll also touch on the installation process and suggest some best practices to optimize your workflow."]}),"\n",(0,i.jsx)(n.h2,{id:"use-case",children:"Use case"}),"\n",(0,i.jsx)(n.p,{children:"Running a server in watch mode offers several key benefits:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Real-time Feedback"})," : Watch mode ensures that your server stays up-to-date with your code changes. It immediately reflects those changes, providing you with real-time feedback during development."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Efficiency"})," : Manually restarting the server each time you modify code can be tedious and time-consuming. Watch mode automates this process, making development more efficient."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Debugging"})," : It helps you quickly identify and fix issues as they arise, reducing the debugging time. When your server automatically restarts upon code changes, you catch errors sooner."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"using-entr",children:["Using ",(0,i.jsx)(n.code,{children:"entr"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"entr"})," is a powerful file-watching utility that makes running a server in watch mode a breeze. Let's go through the steps for the installation process for different operating system :"]}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.h4,{id:"homebrew",children:"Homebrew"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Open the Terminal, which you can find in the "Utilities" folder within the "Applications" folder.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install Homebrew if you haven't already. Run the following command in your Terminal:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once Homebrew is installed, you can install ",(0,i.jsx)(n.code,{children:"entr"})," by running the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"brew install entr\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To verify the installation, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"entr --version\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If the installation is done correctly it will shown the latest version of the ",(0,i.jsx)(n.code,{children:"entr"})]}),"\n",(0,i.jsx)(n.h4,{id:"windows-subsystem",children:"Windows Subsystem"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install Windows Subsystem for Linux (WSL) on your Windows machine by following Microsoft's official documentation."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"After setting up WSL, open the Linux terminal by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"    wsl -d <DistributionName>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"<DistributionName>"})," with the name of the Linux distribution that you have installed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install entr within the Linux terminal using the package manager of your chosen Linux distribution. For example, on Ubuntu, you can use:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"sudo apt update\nsudo apt install entr\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Verify the installation by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"entr --version\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If the installation is done correctly it will shown the latest version of the ",(0,i.jsx)(n.code,{children:"entr"})]}),"\n",(0,i.jsx)(n.h4,{id:"apt-get",children:"apt-get"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On Linux, you can install ",(0,i.jsx)(n.code,{children:"entr"})," using your distribution's package manager. For example, on Ubuntu, use:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"sudo apt update\nsudo apt install entr\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To verify the installation, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"entr --version\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If the installation is done correctly it will shown the latest version of the ",(0,i.jsx)(n.code,{children:"entr"})]}),"\n",(0,i.jsx)(n.h3,{id:"watch-mode",children:"Watch Mode"}),"\n",(0,i.jsxs)(n.p,{children:["To run your server in watch mode using ",(0,i.jsx)(n.code,{children:"entr"}),", you'll utilize the ",(0,i.jsx)(n.code,{children:"ls"})," command to list the files you want to monitor. The general syntax is as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"ls *.graphql | entr -r tailcall start ./jsonplaceholder.graphql\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This command uses ",(0,i.jsx)(n.code,{children:"entr"})," to continuously monitor the ",(0,i.jsx)(n.code,{children:"jsonplaceholder.graphql"})," file and when it changes, It runs the ",(0,i.jsx)(n.code,{children:"tailcall start"})," command with the file as an argument"]}),"\n",(0,i.jsx)(n.p,{children:"The above command is described in detail below :"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ls *.graphql"}),' : This part of the code lists the file or files you want to monitor for changes. In this case, it lists the file named "jsonplaceholder.graphql" within the "examples" directory.']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"|"})," : The pipe symbol ('|') is used to take the output of the preceding command (the file listing) and feed it as input to the following command (entr)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"entr -r tc start ./jsonplaceholder.graphql"}),' : This is the command that will be executed whenever the file "jsonplaceholder.graphql" changes.']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"entr"})," is a command-line tool for running arbitrary commands whenever files change. It monitors the files specified in the previous command (",(0,i.jsx)(n.code,{children:"ls ./jsonplaceholder.graphql"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"r"})," : This flag tells entr to continue running the command even if it encounters errors (it runs the command repeatedly)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"tc start ./jsonplaceholder.graphql"})," : This is the command to run when changes are detected. It is executing a command ",(0,i.jsx)(n.code,{children:"tc start"})," with the file path\n",(0,i.jsx)(n.code,{children:"./jsonplaceholder.graphql"})," as an argument"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"some-best-practices",children:"Some Best Practices"}),"\n",(0,i.jsxs)(n.p,{children:["To make the most of running a server in watch mode with ",(0,i.jsx)(n.code,{children:"entr"}),", consider the following best practices:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Selective File Watching"}),": Be selective about which files you monitor with ",(0,i.jsx)(n.code,{children:"entr"}),". Watching unnecessary files can lead to increased CPU and memory usage. Focus on the essential files related to your project."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Organize Your Project"}),": Maintain a well-organized project structure to make it easier to identify which files need monitoring."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Clear Output"}),": Clear the terminal output before running entr to have a clean workspace."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Version Control"}),": Ensure that your project is under version control (e.g., Git) to track changes and easily revert if necessary."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Update ",(0,i.jsx)(n.code,{children:"entr"})]}),": Kepp ",(0,i.jsx)(n.code,{children:"entr"})," up to date with the latest version to benefit from bug fixes and improvements."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["By following these best practices and using ",(0,i.jsx)(n.code,{children:"entr"})," effectively, you can significantly improve your development workflow. Experiment with ",(0,i.jsx)(n.code,{children:"entr"}),", adapt it to your project's specific requirements, and enjoy a smoother and more efficient development process. Happy coding!"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var i=s(7294);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);