export const mockData = {
  "categories": [
    {
      "id": "ai-tools",
      "name": "AI 工具",
      "icon": "🤖",
      "order": 0,
      "sites": [
        {
          "id": "site-1789751470828",
          "name": "CloudFlare Ai",
          "url": "https://cfai.xwgt.xyz/",
          "description": "私人部署的 AI 平台",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgoJPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiNmMzgwMjAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE1Ljk5IDIuNDQ0aC0yLjEzNXY0LjY5bDIuMTM0LjAwNnptLTQuOTMgMi43MDlsMi4yMjQgMi4yMjVMMTEuNzcgOC44OEw5LjU1MiA2LjY2MmwxLjUxLTEuNTF6TTYuODQ1IDkuNDU1aDQuNjk2bC0uMDA3IDIuMTMzaC00LjY5em0yLjcxIDQuOTI4bDIuMjIyLTIuMjI0bDEuNTA1IDEuNTE0bC0yLjIxOCAyLjIxN2wtMS41MS0xLjUwOXptNC4zIDQuMjE2di00LjY5NmwyLjEzNC4wMDd2NC42OWgtMi4xMzR6bTQuOTI4LTIuNzA2bC0yLjIyNS0yLjIyNWwxLjUxNC0xLjUwNGwyLjIyIDIuMjJsLTEuNTEgMS41MWguMDAxek0yMyAxMS41ODhoLTQuNjk2bC4wMDctMi4xMzNIMjN6bS0yLjcwOS00LjkyNmwtMi4yMjMgMi4yMjNsLTEuNTA0LTEuNTEzbDIuMjItMi4yMnpNMy4yIDIuOTI2VjQuMTNIMS45OTR2MS45MjlIMy4ydjEuMjA0aDEuOTI3VjYuMDU5aDEuMjA0VjQuMTMxSDUuMTI3VjIuOTI2em0wIDE4LjgzNXYtMi4ySDF2LTEuOTI3aDIuMnYtMi4xOThoMS45Mjd2Mi4xOThoMi4ydjEuOTI3aC0yLjJ2Mi4yeiIgY2xpcC1ydWxlPSJldmVub2QiIC8+Cjwvc3ZnPgo="
        },
        {
          "id": "site-1789751527548",
          "name": "DeepSeek（镜像）",
          "url": "https://deepseek.xwgt.xyz/",
          "description": "私有部署 DeepSeek 平台",
          "icon": "https://www.faviconextractor.com/favicon/deepseek.xwgt.xyz"
        },
        {
          "id": "site-1789751587275",
          "name": "DeepSeek Harness",
          "url": "https://harness.xwgt.xyz/",
          "description": "私有部署 DeepSeek Harness",
          "icon": "https://www.faviconextractor.com/favicon/harness.xwgt.xyz"
        },
        {
          "id": "site-1789751693315",
          "name": "豆包",
          "url": "https://www.doubao.com/chat/",
          "description": "字节跳动旗下 AI 平台",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgoJPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiMxZTM3ZmMiIGQ9Ik01LjMxIDE1Ljc1NmMuMTcyLTMuNzUgMS44ODMtNS45OTkgMi41NDktNi43MzljLTMuMjYgMi4wNTgtNS40MjUgNS42NTgtNi4zNTggOC4zMDh2MS4xMkMxLjUwMSAyMS41MTMgNC4yMjYgMjQgNy41OSAyNGE2LjYgNi42IDAgMCAwIDIuMi0uMzc1cS41My0uMTgxIDEuMDM5LS4zNzhhMTIuOCAxMi44IDAgMCAwIDIuMjQzLTIuOTkyYy00Ljg3NyAyLjQzMS03Ljk3NC4wNzItNy43NjMtNC41eiIgLz4KCTxwYXRoIGZpbGw9IiMzN2UxYmUiIGQ9Ik0yMi41NyAxMC4yODNjLTEuMjEyLS45MDEtNC4xMDktMi40MDQtNy4zOTctMi44Yy4yOTUgMy43OTIuMDkzIDguNzY2LTIuMSAxMi43NzNhMTIuOCAxMi44IDAgMCAxLTIuMjQ0IDIuOTkyYzMuNzY0LTEuNDQ4IDYuNzQ2LTMuNDU3IDguNTk2LTUuMjE5YzIuODItMi42ODMgMy4zNTMtNS4xNzggMy4zNjEtNi42NmEyLjcgMi43IDAgMCAwLS4yMTYtMS4wODR6IiAvPgoJPHBhdGggZmlsbD0iI2E1NjlmZiIgZD0iTTE0LjMwMyAxLjg2N0MxMi45NTUuNyAxMS4yNDggMCA5LjM5IDBTNS44ODMuNjc3IDQuNTQ1IDEuODA3QzIuNzkxIDMuMjkgMS42MjcgNS41NTcgMS41IDguMTI1djkuMjAxYy45MzItMi42NSAzLjA5Ny02LjI1IDYuMzU3LTguMzA3cS43NTEtLjQ3NyAxLjU2OS0uODI5YzEuODgzLS44MDEgMy44NzgtLjkzMiA1Ljc0Ni0uNzA2Yy0uMjIyLTIuODMtLjcxOC01LjAwMi0uODctNS42MTd6IiAvPgoJPHBhdGggZmlsbD0iIzFlMzdmYyIgZD0iTTE3LjMwNSA0Ljk2MWEyMDAgMjAwIDAgMCAxLTEuMDgtMS4wOTRxLS4zMDMtLjMxOS0uNTg2LS42MjJsLTEuMzMzLTEuMzc4Yy4xNTEuNjE1LjY0OCAyLjc4Ni44NjkgNS42MTdjMy4yODguMzk1IDYuMTg1IDEuODk4IDcuMzk2IDIuOGMtMS4zMDYtMS4yNzUtMy40NzUtMy40ODctNS4yNjYtNS4zMjMiIC8+Cjwvc3ZnPgo="
        },
        {
          "id": "site-1789751773843",
          "name": "DeepSeek（官方）",
          "url": "https://chat.deepseek.com/",
          "description": "DeepSeek 官方对话平台",
          "icon": "https://www.faviconextractor.com/favicon/chat.deepseek.com"
        },
        {
          "id": "site-1789752031843",
          "name": "智谱清言",
          "url": "https://chatglm.cn",
          "description": "智谱 AI（Z.AI）大型语言模型",
          "icon": "https://www.faviconextractor.com/favicon/chatglm.cn"
        },
        {
          "id": "site-1789751844067",
          "name": "千问",
          "url": "https://www.qianwen.com/",
          "description": "阿里云旗下智能 AI 平台",
          "icon": "https://www.faviconextractor.com/favicon/www.qianwen.com"
        },
        {
          "id": "chatgpt",
          "name": "ChatGPT",
          "url": "https://chat.openai.com",
          "description": "OpenAI 对话 AI 助手",
          "icon": "/sitelogo/chat.openai.com.ico"
        },
        {
          "id": "claude",
          "name": "Claude",
          "url": "https://claude.ai",
          "description": "Anthropic AI 助手",
          "icon": "/sitelogo/claude.ai.ico"
        },
        {
          "id": "midjourney",
          "name": "Midjourney",
          "url": "https://www.midjourney.com",
          "description": "AI 图像生成工具",
          "icon": "/sitelogo/www.midjourney.com.ico"
        },
        {
          "id": "copilot",
          "name": "GitHub Copilot",
          "url": "https://github.com/features/copilot",
          "description": "AI 代码助手",
          "icon": "/sitelogo/github.com.ico"
        },
        {
          "id": "cursor",
          "name": "Cursor",
          "url": "https://cursor.sh",
          "description": "AI 代码编辑器",
          "icon": "/sitelogo/cursor.sh.ico"
        }
      ]
    },
    {
      "id": "cloud",
      "name": "云与部署",
      "icon": "☁️",
      "order": 1,
      "sites": [
        {
          "id": "tencent-cloud",
          "name": "腾讯云",
          "url": "https://cloud.tencent.com",
          "description": "腾讯云计算服务",
          "icon": "/sitelogo/cloud.tencent.com.ico"
        },
        {
          "id": "aliyun",
          "name": "阿里云",
          "url": "https://www.aliyun.com",
          "description": "阿里巴巴云计算",
          "icon": "/sitelogo/www.aliyun.com.ico"
        },
        {
          "id": "huawei-cloud",
          "name": "华为云",
          "url": "https://www.huaweicloud.com",
          "description": "华为云计算服务",
          "icon": "/sitelogo/www.huaweicloud.com.ico"
        },
        {
          "id": "cloudflare",
          "name": "Cloudflare",
          "url": "https://www.cloudflare.com",
          "description": "全球 CDN 和网络安全服务",
          "icon": "/sitelogo/www.cloudflare.com.ico"
        },
        {
          "id": "site-1789752396243",
          "name": "EdgeOne",
          "url": "https://edgeone.ai/zh/login?s_url=https://edgeone.ai/get-free-plan",
          "description": "下一代边缘全栈平台",
          "icon": "https://www.faviconextractor.com/favicon/edgeone.ai"
        },
        {
          "id": "vercel",
          "name": "Vercel",
          "url": "https://vercel.com",
          "description": "前端部署平台",
          "icon": "/sitelogo/vercel.com.ico"
        },
        {
          "id": "aws",
          "name": "AWS",
          "url": "https://aws.amazon.com",
          "description": "亚马逊云服务",
          "icon": "/sitelogo/aws.amazon.com.ico"
        },
        {
          "id": "site-1752644060499",
          "name": "怕死云",
          "url": "https://www.pasyun.com/",
          "description": "IPv6 云服务器",
          "icon": "/sitelogo/www.pasyun.com.ico"
        },
        {
          "id": "site-1789752461146",
          "name": "GNAME",
          "url": "https://www.gname.net/",
          "description": "免费域名注册",
          "icon": "https://www.faviconextractor.com/favicon/www.gname.net"
        },
        {
          "id": "site-1789752689250",
          "name": "DigitalPlat",
          "url": "https://dashboard.digitalplat.org/auth/login",
          "description": "二级免费域名注册",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgoJPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiM0Mjg1ZjQiIGQ9Ik0xMyAxOGgtMlY4aDJ6IiAvPgoJPHBhdGggZmlsbD0iIzY2OWRmNiIgZD0iTTIgMjFoMjB2LTJIMnoiIC8+Cgk8cGF0aCBmaWxsPSIjYWVjYmZhIiBkPSJNMTAgMjJoNHYtNGgtNHpNMiAyaDIwdjZIMnoiIC8+Cgk8cGF0aCBmaWxsPSIjNjY5ZGY2IiBkPSJNMTIgMmgxMHY2SDEyeiIgLz4KCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00IDRoMnYySDR6IiAvPgoJPHBhdGggZmlsbD0iI2FlY2JmYSIgZD0iTTIgMTBoMjB2NkgyeiIgLz4KCTxwYXRoIGZpbGw9IiM2NjlkZjYiIGQ9Ik0xMiAxMGgxMHY2SDEyeiIgLz4KCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00IDEyaDJ2Mkg0eiIgLz4KPC9zdmc+Cg=="
        },
        {
          "id": "site-1789752775730",
          "name": "DNSHE",
          "url": "https://my.dnshe.com/",
          "description": "二级免费域名注册",
          "icon": "https://www.faviconextractor.com/favicon/my.dnshe.com"
        },
        {
          "id": "site-1789752835290",
          "name": "SupaBase",
          "url": "https://supabase.com/",
          "description": "免费数据库",
          "icon": "https://www.faviconextractor.com/favicon/supabase.com"
        },
        {
          "id": "site-1789752919866",
          "name": "Neon",
          "url": "https://console.neon.tech/",
          "description": "数据库平台",
          "icon": "https://www.faviconextractor.com/favicon/console.neon.tech"
        }
      ]
    },
    {
      "id": "dev-tools",
      "name": "开发资源",
      "icon": "💻",
      "order": 2,
      "sites": [
        {
          "id": "github",
          "name": "GitHub",
          "url": "https://github.com",
          "description": "代码托管平台",
          "icon": "/sitelogo/github.com.ico"
        },
        {
          "id": "site-1789750209422",
          "name": "Pan-Sou",
          "url": "https://pansou.xwgt.xyz",
          "description": "网盘聚合搜索",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTYgMTYiPgoJPHBhdGggZD0iTTAgMGgxNnYxNkgweiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxwYXRoIGZpbGw9InVybCgjU1ZHTjl5b0hkekEpIiBkPSJNMTEgNi41YTQuNSA0LjUgMCAxIDEtOSAwYTQuNSA0LjUgMCAwIDEgOSAwIiAvPgoJCTxwYXRoIGZpbGw9InVybCgjU1ZHaGszNk9DS2UpIiBkPSJNOS44MjMgMTAuODgzYTUuNSA1LjUgMCAxIDEgMS4wNi0xLjA2bDIuODk3IDIuODk3YS43NS43NSAwIDEgMS0xLjA2IDEuMDZ6TTEwLjUgNi41YTQgNCAwIDEgMC04IDBhNCA0IDAgMCAwIDggMCIgLz4KCQk8cGF0aCBmaWxsPSJ1cmwoI1NWR0RKOXJoZW5oKSIgZD0ibTE1Ljc4MyA4LjIxM2wtLjc2NS0uMjQ4YTEuNTggMS41OCAwIDAgMS0xLS45OTlsLS4yNDgtLjc2NGEuMzAyLjMwMiAwIDAgMC0uNTcgMGwtLjI1Ljc2NGExLjU4IDEuNTggMCAwIDEtLjk4My45OTlsLS43NjUuMjQ4YS4zMDMuMzAzIDAgMCAwIDAgLjU3bC43NjUuMjQ5YTEuNTggMS41OCAwIDAgMSAxIDEuMDAybC4yNDguNzY0YS4zMDIuMzAyIDAgMCAwIC41NyAwbC4yNDktLjc2NGExLjU4IDEuNTggMCAwIDEgLjk5OS0uOTk5bC43NjUtLjI0OGEuMzAzLjMwMyAwIDAgMCAwLS41N3oiIC8+CgkJPHBhdGggZmlsbD0idXJsKCNTVkdFTEFOSGVMQykiIGQ9Im0xMC44NzguMjgybC4zNDggMS4wNzFhMi4yIDIuMiAwIDAgMCAxLjM5OCAxLjM5N2wxLjA3Mi4zNDhsLjAyMS4wMDZhLjQyMy40MjMgMCAwIDEgMCAuNzk4bC0xLjA3MS4zNDhhMi4yIDIuMiAwIDAgMC0xLjM5OSAxLjM5N2wtLjM0OCAxLjA3YS40MjMuNDIzIDAgMCAxLS43OTggMGwtLjM0OC0xLjA3YTIuMiAyLjIgMCAwIDAtMS4zOTktMS40MDNsLTEuMDcyLS4zNDhhLjQyMy40MjMgMCAwIDEgMC0uNzk4bDEuMDcyLS4zNDhhMi4yIDIuMiAwIDAgMCAxLjM3Ny0xLjM5N2wuMzQ4LTEuMDdhLjQyMy40MjMgMCAwIDEgLjc5OSAwIiAvPgoJCTxkZWZzPgoJCQk8cmFkaWFsR3JhZGllbnQgaWQ9IlNWR0RKOXJoZW5oIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VHJhbnNmb3JtPSJyb3RhdGUoNjMuMzc5IDExLjU2NCAtNC40ODMpc2NhbGUoMjguNjEzNyAyMi4yODA4KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQkJPHN0b3Agb2Zmc2V0PSIuNzE4IiBzdG9wLWNvbG9yPSIjZmZjZDBmIiAvPgoJCQkJPHN0b3Agb2Zmc2V0PSIuOTkxIiBzdG9wLWNvbG9yPSIjZTY3NTA1IiAvPgoJCQk8L3JhZGlhbEdyYWRpZW50PgoJCQk8cmFkaWFsR3JhZGllbnQgaWQ9IlNWR0VMQU5IZUxDIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VHJhbnNmb3JtPSJyb3RhdGUoNjEuMiAxNC4wNTcgLTEwLjI0KXNjYWxlKDMwLjA5OCAyMy40MzY2KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQkJPHN0b3Agb2Zmc2V0PSIuNjk4IiBzdG9wLWNvbG9yPSIjZmZjZDBmIiAvPgoJCQkJPHN0b3Agb2Zmc2V0PSIuOTkxIiBzdG9wLWNvbG9yPSIjZTY3NTA1IiAvPgoJCQk8L3JhZGlhbEdyYWRpZW50PgoJCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR045eW9IZHpBIiB4MT0iOC43NSIgeDI9IjIiIHkxPSIzLjUiIHkyPSIxMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQkJPHN0b3Agc3RvcC1jb2xvcj0iI2ZkZmRmZCIgLz4KCQkJCTxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2IzZTBmZiIgLz4KCQkJPC9saW5lYXJHcmFkaWVudD4KCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdoazM2T0NLZSIgeDE9IjEuNjg0IiB4Mj0iMTIuNjMyIiB5MT0iMTIuNjMyIiB5Mj0iMy43MzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxzdG9wIHN0b3AtY29sb3I9IiMwMDk0ZjAiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyOWMzZmYiIC8+CgkJCTwvbGluZWFyR3JhZGllbnQ+CgkJPC9kZWZzPgoJPC9nPgo8L3N2Zz4K"
        },
        {
          "id": "site-1789750825069",
          "name": "It-Tools",
          "url": "https://it-tools.xwtx.eu.cc/",
          "description": "开发者工具箱",
          "icon": "https://www.faviconextractor.com/favicon/it-tools.xwtx.eu.cc"
        },
        {
          "id": "site-1789750991844",
          "name": "OmniTools",
          "url": "https://tool.xwgt.xyz/",
          "description": "全能在线工具箱",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTYgMTYiPgoJPHBhdGggZD0iTTAgMGgxNnYxNkgweiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiMxZTg4ZTUiIGQ9Im02LjkyMiAzLjc2OGwtLjY0NC0uNTM2QTEgMSAwIDAgMCA1LjYzOCAzSDJhMSAxIDAgMCAwLTEgMXY4YTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMVY1YTEgMSAwIDAgMC0xLTFINy41NjJhMSAxIDAgMCAxLS42NC0uMjMyIiAvPgoJPHBhdGggZmlsbD0iI2JiZGVmYiIgZD0iTTEyLjE4MiA5LjUwNkw2LjY4MiAxNUw2IDE0LjMxOWw1LjQ5NC01LjVabTIuMTgyLTEuNDA4bC4yODctLjI4OGwtLjM4NS0uMzg0bC4zMTItLjMxMmwtLjY5Mi0uNjkxbC0uMzExLjMxMWwtLjM4NS0uMzg1bC0uMjg3LjI4OEExMC4zIDEwLjMgMCAwIDAgMTAuMDc4IDVsLS40MDUuODcyYTEyLjMgMTIuMyAwIDAgMSAyLjM2OCAxLjYyN2wtLjI0NC4yNDRsMS40NjEgMS40NjFsLjI0NC0uMjQ0YTEyLjMgMTIuMyAwIDAgMSAxLjYyNiAyLjM2OGwuODcyLS40MDRhMTAuMyAxMC4zIDAgMCAwLTEuNjM2LTIuODI1IiAvPgo8L3N2Zz4K"
        },
        {
          "id": "site-1789751150796",
          "name": "HivisionIDPhotos",
          "url": "https://zjz.xwgt.xyz/",
          "description": "证件照处理工具",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzIgMzIiPgoJPHBhdGggZD0iTTAgMGgzMnYzMkgweiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxwYXRoIGZpbGw9IiMyNmM5ZmMiIGQ9Ik0yNy44IDMwSDQuMkMzIDMwIDIgMjkgMiAyNy44VjE0LjJDMiAxMyAzIDEyIDQuMiAxMmgyMy41YzEuMyAwIDIuMyAxIDIuMyAyLjJ2MTMuNWMwIDEuMy0xIDIuMy0yLjIgMi4zIiAvPgoJCTxwYXRoIGZpbGw9IiNmNGY0ZjQiIGQ9Ik0yNi40MDUgMjhoLTExLjgxYy0uMjk3IDAtLjU5NS0uMTk0LS41OTUtLjU4di0xLjg0YzAtLjI5LjE5OC0uNTguNTk1LS41OGgxMS44MWMuMjk3IDAgLjU5NS4xOTQuNTk1LjU4djEuODRjMCAuMjktLjI5OC41OC0uNTk1LjU4IiAvPgoJCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS4wMjQgMjNINC45NzZjLS4zOTMgMC0uNzg1Ljc0MS0uOTIzLjMyOFE0IDIzLjE3OCA0IDIzdi04YzAtLjUuMzktMSAuOTc2LTFoNi4wNDhjLjQ4OCAwIC45NzYuNC45NzYgMXY4cTAgLjEwOC0uMDE3LjIwOGMtLjA4LjQ4My0uNDQ0LS4yMDgtLjk1OS0uMjA4IiAvPgoJCTxwYXRoIGZpbGw9IiMwMDc0YmEiIGQ9Ik0xNC41IDE1YS41LjUgMCAwIDAgMCAxaDEyYS41LjUgMCAxIDAgMC0xem0tLjUgMy41YS41LjUgMCAwIDEgLjUtLjVoMTJhLjUuNSAwIDEgMSAwIDFoLTEyYS41LjUgMCAwIDEtLjUtLjVtMCAzYS41LjUgMCAwIDEgLjUtLjVoMTJhLjUuNSAwIDEgMSAwIDFoLTEyYS41LjUgMCAwIDEtLjUtLjUiIC8+CgkJPHBhdGggZmlsbD0iIzMyMWI0MSIgZD0iTTguNDc2IDE1aC0uOThjLTEuMDc2IDAtMS44Ni45Mi0xLjc2MiAyLjA0NWwuMDQuNTNhLjcxLjcxIDAgMCAwLS41My42OThjMCAuMzc5LjI4Mi42ODkuNjM5LjcxNGwuMDQ3LjYxNWMuMDc3LjY0My41MTcgMS4yMjMgMS4xMyAxLjQ0MmMtMS4yNzQuMjgzLTIuMzY0IDEuMDg0LTMuMDYgMi4xODFjLjExLjQ3NC41My43NzUuOTUxLjc3NWg2LjA3Yy41ODcgMCAuOTc5LS40MS45NzktMS4wMjNhNC44NyA0Ljg3IDAgMCAwLTIuOTk1LTEuOTU1Yy41NjQtLjIxOC45NjQtLjczMyAxLjAzNy0xLjQybC4wNDctLjYxNWEuNzA0LjcwNCAwIDAgMCAuNjM4LS43MTRhLjcxLjcxIDAgMCAwLS41My0uNjk4bC4wNC0uNTNjLjEtMS4xMjUtLjc4MS0yLjA0NS0xLjc2LTIuMDQ1TTE1LjUgMjdoMTBjLjIgMCAuNS0uMi41LS41cy0uMi0uNS0uNS0uNWgtMTBjLS4zIDAtLjUuMi0uNS41cy4yLjUuNS41IiAvPgoJPC9nPgo8L3N2Zz4K"
        },
        {
          "id": "regex101",
          "name": "Regex101",
          "url": "https://regex101.com",
          "description": "正则表达式测试",
          "icon": "/sitelogo/regex101.com.ico"
        },
        {
          "id": "tinypng",
          "name": "TinyPNG",
          "url": "https://tinypng.com",
          "description": "图片压缩工具",
          "icon": "/sitelogo/tinypng.com.ico"
        },
        {
          "id": "site-1774438333579",
          "name": "freemail",
          "url": "https://mail.chatgpt.org.uk/",
          "description": "免费邮箱站点",
          "icon": "https://www.faviconextractor.com/favicon/mail.chatgpt.org.uk"
        },
        {
          "id": "site-1789764168397",
          "name": "魔戒",
          "url": "https://mojie.ws/#/login",
          "description": "VPN 订阅服务",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNjQgNjQiPgoJPHBhdGggZD0iTTAgMGg2NHY2NEgweiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiNmNjkyMWUiIGQ9Ik0zOC4wMiA1LjEzNGMtNy44OTcgMS4zOTEtMTUuODI1IDUuODAxLTIyLjMyMiAxMi40MThjLTYuNCA2LjUxOS0xMC42MTcgMTQuMzg0LTExLjg3NiAyMi4xNWMtMS4yNTggNy43NzEuNTkyIDE0LjUwNSA1LjIxNCAxOC45N2M0LjU0OSA0LjQwMiAxMS4yNzEgNi4wODMgMTguOTMzIDQuNzM0aC4wMDJjNy44OTUtMS4zODkgMTUuODItNS43OTcgMjIuMzE1LTEyLjQxNmM2LjQwMy02LjUxOSAxMC42MTktMTQuMzg0IDExLjg3NS0yMi4xNWMxLjI1OS03Ljc2OS0uNTkyLTE0LjUwNS01LjIxMi0xOC45NjhDNTIuNCA1LjQ3IDQ1LjY3NyAzLjc5IDM4LjAyIDUuMTM2bS04Ljk2IDUxLjkzNmMtNS45OTIgMS4wNTUtMTEuMjU0LS4yNjEtMTQuODEzLTMuN2MtNy40NjItNy4yMTUtNS4xMjYtMjEuNjUyIDUuMjE0LTMyLjE4YzUuMDg0LTUuMTc2IDExLjI4Ni04LjYyOCAxNy40NjctOS43MTVjNS45ODktMS4wNTMgMTEuMjU0LjI2NCAxNC44MTIgMy43MDRjNy40NjUgNy4yMTUgNS4xMiAyMS42NTEtNS4yMTQgMzIuMThjLTUuMDg1IDUuMTc0LTExLjI4NiA4LjYyOC0xNy40NjYgOS43MTMiIC8+Cgk8ZyBmaWxsPSIjZGM4MDI3Ij4KCQk8cGF0aCBkPSJNNS44NzUgNDEuNzQ1YzEuMjU4LTcuNzY1IDUuNDc4LTE1LjYzNCAxMS44NzMtMjIuMTVjNi40OTgtNi42MTkgMTQuNDIzLTExLjAzIDIyLjMyMi0xMi40MThjNy4xNjItMS4yNTggMTMuNTAyLjEyOCAxOC4wMiAzLjkxMmExNyAxNyAwIDAgMC0xLjEzNS0xLjIyM2MtNC41NDktNC4zOTgtMTEuMjcxLTYuMDc4LTE4LjkzLTQuNzMxYy03Ljg5NyAxLjM5MS0xNS44MjUgNS44MDEtMjIuMzIyIDEyLjQxOGMtNi40IDYuNTE4LTEwLjYxNyAxNC4zODMtMTEuODc2IDIyLjE1Yy0xLjI1OCA3Ljc3MS41OTYgMTQuNTAzIDUuMjE0IDE4Ljk3cS40NDQuNDMuOTE5LjgyNGMtMy43NzktNC40MjktNS4yMzMtMTAuNjU2LTQuMDgxLTE3Ljc1MSIgLz4KCQk8cGF0aCBkPSJNMzEuMTEgNTkuMTFjNi4xNzgtMS4wODQgMTIuMzgtNC41MzQgMTcuNDYyLTkuNzEyYzEwLjM0LTEwLjUzMSAxMi42OC0yNC45NjUgNS4yMTYtMzIuMThjLS4zLS4yODctLjYxOS0uNTYtLjk0MS0uODJjNi4wNzUgNy41MzMgMy40NiAyMC45OS02LjMyNCAzMC45NTdjLTUuMDc3IDUuMTc4LTExLjI4NSA4LjYzMi0xNy40NjQgOS43MTdjLTUuNDg5Ljk2NS0xMC4zNTYtLjA2My0xMy44NzYtMi44ODRjLjM0OC40MjYuNzA5LjgzNiAxLjExMiAxLjIyNWMzLjU1OCAzLjQ0IDguODIxIDQuNzU1IDE0LjgxNSAzLjY5OSIgLz4KCTwvZz4KCTxwYXRoIGZpbGw9IiMzYmM1ZjEiIGQ9Ik0yOS41MzIuMjMzTDM4LjEyMyAxMGwtMy4xODQgNC4wMWwtNi43ODMgMi4wMzJzLTQuMTg4LS43ODctNC4yNjItMS4zMTdjLS4wNzUtLjUzMS0zLjE0Mi00LjgxOC0yLjU0NC01LjI5MmMuNTkxLS40NzIgMy4zNjYtNC4zNzUgMy41MDktNC40NjdjLjE0My0uMDg4IDQuNjczLTQuNzI5IDQuNjczLTQuNzI5TS4wODQgMjUuNDI2bDkuNjEgMTAuOTM0bDcuNTcxLTIuNzU2bC0uMDIxLTEzLjM1M2wtNi4xNzQtMS42MDZsLTcuNDc5IDMuNDQ1eiIgLz4KCTxwYXRoIGZpbGw9IiMwMGE1ZDciIGQ9Ik0yNi4xNCAxNC4wNUwyOS41NzguMDNsLjAxNi0uMDIzbC04Ljk1OS42OTJsLTEuMjQ4IDEuMDU3bC0xNi4xIDEzLjcxMmwtMS4yNDYgMS4wNTlsLTIuMDIgOC42NjRsMTQuNjM5LTEuMzM2YzEuODM0LTQuMzYgNi43NzktOC43NiAxMS40NzktOS44MDIiIC8+Cgk8cGF0aCBmaWxsPSIjM2JjNWYxIiBkPSJNMjkuNDg0LjA0NEwyMC41OTMuNzNsLTEuMjQ1IDEuMDU5TDMuMjUzIDE1LjQ5N0wyLjAxIDE2LjU2MUwwIDI1LjE1eiIgLz4KCTxwYXRoIGZpbGw9IiMwMGE1ZDciIGQ9Im0yMS4zOTcgMTYuMTRsLTIuNTY1LTcuMDNsLTcuNDYyLS41MzNsLS4zNjEgNy4xOTRsNi41NTIgMy42NTRhMjAgMjAgMCAwIDEgMy44MzYtMy4yODkiIC8+Cgk8cGF0aCBmaWxsPSIjM2JjNWYxIiBkPSJtMjEuNDIyIDE2LjEzbC0yLjUzMS02LjkyOWwtNy44MTEgNi42NTNsNi40NjIgMy42MDFhMjAgMjAgMCAwIDEgMy44OC0zLjMyNSIgLz4KCTxwYXRoIGZpbGw9IiMwMGE1ZDciIGQ9Im0yMy44MDIgMTEuNzE4bDE0LjMyOS0xLjc3NGwuMDIzLS4wMTVsLTEuNzI5IDguODIxbC0xLjE5OSAxLjExMWwtMTUuNDkzIDE0LjM5bC0xLjIgMS4xMTRsLTguODQuOTk0bDMuMDM1LTE0LjM3OWM0LjU0Ny0xLjMxNyA5LjQ5My01LjcwOSAxMS4wNy0xMC4yNjIiIC8+Cgk8cGF0aCBmaWxsPSIjM2JjNWYxIiBkPSJtMzguMTIgMTBsLTEuNzE1IDguNzU0bC0xLjE5NSAxLjExNmwtMTUuNDkzIDE0LjM4bC0xLjIgMS4xMmwtOC43NzUuOTl6IiAvPgoJPHBhdGggZmlsbD0iIzAwYTVkNyIgZD0ibTIxLjE3IDE2LjE5MWw2LjY4IDMuMzY2bC0uMzQgNy40NzVsLTcuMTg5LS40ODRsLTIuODYzLTYuOTMyYTIwIDIwIDAgMCAwIDMuNzEyLTMuNDI1IiAvPgoJPHBhdGggZmlsbD0iIzNiYzVmMSIgZD0ibTIxLjE5IDE2LjE3bDYuNTg1IDMuMzIybC03LjUxOSA2Ljk4MmwtMi44MTktNi44MzdhMjAgMjAgMCAwIDAgMy43NTMtMy40NjciIC8+Cjwvc3ZnPgo="
        },
        {
          "id": "site-1789764214021",
          "name": "青龙仓库",
          "url": "https://qinglong.xiaodecheji.com/",
          "description": "青龙面板脚本仓库",
          "icon": "https://www.faviconextractor.com/favicon/qinglong.xiaodecheji.com"
        },
        {
          "id": "site-1789764259629",
          "name": "软仓",
          "url": "https://www.ruancang.net/",
          "description": "软件仓库",
          "icon": "https://www.faviconextractor.com/favicon/www.ruancang.net"
        },
        {
          "id": "site-1789764312773",
          "name": "油猴脚本",
          "url": "https://greasyfork.org/zh-CN",
          "description": "油猴脚本仓库",
          "icon": "https://www.faviconextractor.com/favicon/greasyfork.org"
        },
        {
          "id": "site-1789764384070",
          "name": "Xterminal",
          "url": "https://www.terminal.icu/",
          "description": "SSH 工具",
          "icon": "https://www.faviconextractor.com/favicon/www.terminal.icu"
        }
      ]
    },
    {
      "id": "community",
      "name": "技术社区",
      "icon": "👥",
      "order": 3,
      "sites": [
        {
          "id": "linuxdo",
          "name": "Linux.do",
          "url": "https://linux.do",
          "description": "Linux 与开源技术社区",
          "icon": "/sitelogo/linux.do.ico"
        },
        {
          "id": "nodeseek",
          "name": "NodeSeek",
          "url": "https://www.nodeseek.com",
          "description": "极客技术社区",
          "icon": "/sitelogo/www.nodeseek.com.ico"
        },
        {
          "id": "stackoverflow",
          "name": "Stack Overflow",
          "url": "https://stackoverflow.com",
          "description": "程序员问答社区",
          "icon": "/sitelogo/stackoverflow.com.ico"
        },
        {
          "id": "v2ex",
          "name": "V2EX",
          "url": "https://www.v2ex.com",
          "description": "创意工作者社区",
          "icon": "/sitelogo/www.v2ex.com.ico"
        },
        {
          "id": "52pojie",
          "name": "吾爱破解",
          "url": "https://www.52pojie.cn/",
          "description": "软件安全技术论坛",
          "icon": "/sitelogo/www.52pojie.cn.ico"
        },
        {
          "id": "site-1789764490300",
          "name": "飞牛论坛",
          "url": "https://club.fnnas.com/",
          "description": "NAS 与家庭服务器社区",
          "icon": "https://www.faviconextractor.com/favicon/club.fnnas.com"
        },
        {
          "id": "site-1789764584396",
          "name": "NewsNow",
          "url": "https://news.xwgt.xyz/",
          "description": "热点新闻聚合网站",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNDggNDgiPgoJPHBhdGggZD0iTTAgMGg0OHY0OEgweiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiNGRjU3MjIiIGQ9Ik0zMiAxNXYyOEgxMGMtMi4yIDAtNC0xLjgtNC00VjE1eiIgLz4KCTxwYXRoIGZpbGw9IiNGRkNDQkMiIGQ9Ik0xNCA1djM0YzAgMi4yLTEuOCA0LTQgNGgyOWMyLjIgMCA0LTEuOCA0LTRWNXoiIC8+Cgk8cGF0aCBmaWxsPSIjRkY1NzIyIiBkPSJNMjAgMTBoMTh2NEgyMHptMCA3aDh2MmgtOHptMTAgMGg4djJoLTh6bS0xMCA0aDh2MmgtOHptMTAgMGg4djJoLTh6bS0xMCA0aDh2MmgtOHptMTAgMGg4djJoLTh6bS0xMCA0aDh2MmgtOHptMTAgMGg4djJoLTh6bS0xMCA0aDh2MmgtOHptMTAgMGg4djJoLTh6bS0xMCA0aDh2MmgtOHptMTAgMGg4djJoLTh6IiAvPgo8L3N2Zz4K"
        },
        {
          "id": "site-1789764655972",
          "name": "远景论坛",
          "url": "https://bbs.pcbeta.com/",
          "description": "前沿科技资讯网站",
          "icon": "https://www.faviconextractor.com/favicon/bbs.pcbeta.com"
        }
      ]
    },
    {
      "id": "design",
      "name": "设计素材",
      "icon": "🎨",
      "order": 4,
      "sites": [
        {
          "id": "site-1789762942630",
          "name": "Icinify",
          "url": "https://iconify.design/",
          "description": "免费图标网站",
          "icon": "https://www.faviconextractor.com/favicon/iconify.design"
        },
        {
          "id": "figma",
          "name": "Figma",
          "url": "https://figma.com",
          "description": "UI 设计工具",
          "icon": "/sitelogo/figma.com.ico"
        },
        {
          "id": "sketch",
          "name": "Sketch",
          "url": "https://www.sketch.com",
          "description": "界面设计工具",
          "icon": "/sitelogo/www.sketch.com.ico"
        },
        {
          "id": "canva",
          "name": "Canva",
          "url": "https://www.canva.com",
          "description": "在线设计平台",
          "icon": "/sitelogo/www.canva.com.ico"
        },
        {
          "id": "adobe-xd",
          "name": "Adobe XD",
          "url": "https://www.adobe.com/products/xd.html",
          "description": "用户体验设计工具",
          "icon": "/sitelogo/www.adobe.com.ico"
        },
        {
          "id": "site-1789762992542",
          "name": "Color Hunt",
          "url": "https://colorhunt.co/",
          "description": "色彩搭配网站",
          "icon": "https://www.faviconextractor.com/favicon/colorhunt.co"
        },
        {
          "id": "site-1789763036822",
          "name": "壁纸社区",
          "url": "https://haowallpaper.com/wallpaperForum",
          "description": "手机、电脑壁纸",
          "icon": "https://www.faviconextractor.com/favicon/haowallpaper.com"
        },
        {
          "id": "site-1789763600406",
          "name": "4K 壁纸",
          "url": "https://pic.netbian.com/",
          "description": "高清壁纸站",
          "icon": "https://www.faviconextractor.com/favicon/pic.netbian.com"
        },
        {
          "id": "site-1789763685893",
          "name": "秀人网",
          "url": "https://www.xiurenbox.com/",
          "description": "写真图片站",
          "icon": "https://www.xiurenbox.com/wp-content/uploads/2025/08/xiurenbox.png"
        }
      ]
    },
    {
      "id": "learning",
      "name": "学习教程",
      "icon": "📚",
      "order": 5,
      "sites": [
        {
          "id": "mdn",
          "name": "MDN Web Docs",
          "url": "https://developer.mozilla.org",
          "description": "Web 开发权威文档",
          "icon": "/sitelogo/developer.mozilla.org.ico"
        },
        {
          "id": "w3school",
          "name": "W3Schools",
          "url": "https://www.w3schools.com",
          "description": "Web 技术教程",
          "icon": "/sitelogo/www.w3schools.com.ico"
        },
        {
          "id": "runoob",
          "name": "菜鸟教程",
          "url": "https://www.runoob.com",
          "description": "编程技术教程",
          "icon": "/sitelogo/www.runoob.com.ico"
        },
        {
          "id": "coursera",
          "name": "Coursera",
          "url": "https://www.coursera.org",
          "description": "在线课程平台",
          "icon": "/sitelogo/www.coursera.org.ico"
        },
        {
          "id": "site-1789764744628",
          "name": "My-Blog",
          "url": "https://myblog.xwgt.xyz/",
          "description": "个人博客",
          "icon": "https://www.faviconextractor.com/favicon/myblog.xwgt.xyz"
        },
        {
          "id": "site-1789764797556",
          "name": "源仓库",
          "url": "https://www.yckceo.com/",
          "description": "阅读软件书源",
          "icon": "https://www.faviconextractor.com/favicon/www.yckceo.com"
        },
        {
          "id": "site-1789764881653",
          "name": "Ebook",
          "url": "https://jbiaojerry.github.io/ebook-treasure-chest/",
          "description": "电子书下载宝库",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzIgMzIiPgoJPHBhdGggZD0iTTAgMGgzMnYzMkgweiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxwYXRoIGZpbGw9IiMwMGE2ZWQiIGQ9Ik0xNy4wNDUgMjcuMjg2SDMwVjEzYTIgMiAwIDAgMC0yLTJIMTcuMDQ1eiIgLz4KCQk8cGF0aCBmaWxsPSIjZDNkM2QzIiBkPSJNMTUuNjgyIDI3Ljk2NEgzMHYxLjM1N0gxNS42ODJ6IiAvPgoJCTxwYXRoIGZpbGw9IiMwMDc0YmEiIGQ9Ik0xNi4wMjMgMTFBMS4wMiAxLjAyIDAgMCAwIDE1IDEyLjAxOHYxNi42MjVoLjY4MmEuNjguNjggMCAwIDEgLjY4Mi0uNjc5aC42ODFWMTF6IiAvPgoJCTxwYXRoIGZpbGw9IiMwMDc0YmEiIGQ9Ik0xNi4wMjMgMjcuMjg2QTEuMDIgMS4wMiAwIDAgMCAxNSAyOC4zMDR2LjY3OEExLjAyIDEuMDIgMCAwIDAgMTYuMDIzIDMwaDEyLjk1NGMuNDQ2IDAgLjgyNC0uMjgzLjk2NS0uNjc4SDE2LjM2NGEuNjguNjggMCAwIDEtLjY4Mi0uNjhhLjY4LjY4IDAgMCAxIC42ODItLjY3OEgzMHYtLjY3OHoiIC8+CgkJPHBhdGggZmlsbD0iI2NhMGI0YSIgZD0iTTEwLjA0NSAyMy4yODZIMjNWOWEyIDIgMCAwIDAtMi0ySDEwLjA0NXoiIC8+CgkJPHBhdGggZmlsbD0iI2QzZDNkMyIgZD0iTTguNjgyIDIzLjk2NEgyM3YxLjM1N0g4LjY4MnoiIC8+CgkJPHBhdGggZmlsbD0iIzk5MDgzOCIgZD0iTTkuMDIzIDdBMS4wMiAxLjAyIDAgMCAwIDggOC4wMTh2MTYuNjI1aC42ODJhLjY4LjY4IDAgMCAxIC42ODItLjY3OWguNjgxVjd6IiAvPgoJCTxwYXRoIGZpbGw9IiM5OTA4MzgiIGQ9Ik05LjAyMyAyMy4yODZBMS4wMiAxLjAyIDAgMCAwIDggMjQuMzA0di42NzhBMS4wMiAxLjAyIDAgMCAwIDkuMDIzIDI2aDEyLjk1NGMuNDQ2IDAgLjgyNC0uMjgzLjk2NS0uNjc4SDkuMzY0YS42OC42OCAwIDAgMS0uNjgyLS42OGEuNjguNjggMCAwIDEgLjY4Mi0uNjc4SDIzdi0uNjc4eiIgLz4KCQk8cGF0aCBmaWxsPSIjODZkNzJmIiBkPSJNNC4wNDUgMjAuMjg2SDE3VjZhMiAyIDAgMCAwLTItMkg0LjA0NXoiIC8+CgkJPHBhdGggZmlsbD0iI2QzZDNkMyIgZD0iTTIuNjgyIDIwLjk2NEgxN3YxLjM1N0gyLjY4MnoiIC8+CgkJPHBhdGggZmlsbD0iIzQ0OTExYiIgZD0iTTMuMDIzIDRBMS4wMiAxLjAyIDAgMCAwIDIgNS4wMTh2MTYuNjI1aC42ODJhLjY4LjY4IDAgMCAxIC42ODItLjY3OWguNjgxVjR6IiAvPgoJCTxwYXRoIGZpbGw9IiMwMDg0NjMiIGQ9Ik0zLjAyMyAyMC4yODZBMS4wMiAxLjAyIDAgMCAwIDIgMjEuMzA0di42NzhBMS4wMiAxLjAyIDAgMCAwIDMuMDIzIDIzaDEyLjk1NGMuNDQ2IDAgLjgyNC0uMjgzLjk2NS0uNjc4SDMuMzY0YS42OC42OCAwIDAgMS0uNjgyLS42OGEuNjguNjggMCAwIDEgLjY4Mi0uNjc4SDE3di0uNjc4eiIgLz4KCTwvZz4KPC9zdmc+Cg=="
        },
        {
          "id": "site-1789764966756",
          "name": "零度博客",
          "url": "https://www.freedidi.com/",
          "description": "教程博客",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8ZyBmaWxsPSJub25lIj4KCQk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzAwNzNhYSIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00Mi4yMTQgMTI3Ljk5NGMwIDMzLjk1NSAxOS43MzMgNjMuMjk5IDQ4LjM0NyA3Ny4yMDVMNDkuNjQxIDkzLjA4M2E4NS41IDg1LjUgMCAwIDAtNy40MjcgMzQuOTExbTE0My42OTQtNC4zMjljMC0xMC42MDEtMy44MDgtMTcuOTQzLTcuMDc0LTIzLjY1OGMtNC4zNDktNy4wNjYtOC40MjUtMTMuMDUtOC40MjUtMjAuMTE2YzAtNy44ODYgNS45ODEtMTUuMjI2IDE0LjQwNS0xNS4yMjYuMzgxIDAgLjc0MS4wNDcgMS4xMTIuMDY4Yy0xNS4yNjItMTMuOTgyLTM1LjU5NS0yMi41MTktNTcuOTI5LTIyLjUxOWMtMjkuOTY4IDAtNTYuMzM1IDE1LjM3Ni03MS42NzMgMzguNjY2YzIuMDEyLjA2IDMuOTA5LjEwMyA1LjUyLjEwM2M4Ljk3MyAwIDIyLjg2Mi0xLjA5IDIyLjg2Mi0xLjA5YzQuNjI0LS4yNzIgNS4xNyA2LjUyLjU1IDcuMDY3YzAgMC00LjY0Ny41NDctOS44MTguODE4bDMxLjIzOCA5Mi45MThsMTguNzczLTU2LjMwM2wtMTMuMzY1LTM2LjYxOGMtNC42MTktLjI3MS04Ljk5NS0uODE4LTguOTk1LS44MThjLTQuNjIzLS4yNzEtNC4wODEtNy4zMzkuNTQyLTcuMDY2YzAgMCAxNC4xNjYgMS4wODggMjIuNTk1IDEuMDg4YzguOTcyIDAgMjIuODYyLTEuMDg4IDIyLjg2Mi0xLjA4OGM0LjYyOC0uMjczIDUuMTcxIDYuNTE5LjU1IDcuMDY2YzAgMC00LjY1Ny41NDctOS44MTguODE4bDMxLjAwMSA5Mi4yMTRsOC41NTYtMjguNTkyYzMuNzA5LTExLjg2NiA2LjUzMS0yMC4zODggNi41MzEtMjcuNzMyIiAvPgoJCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMjkuNTAzIDEzNS40OThsLTI1LjczOCA3NC43OWE4NS44IDg1LjggMCAwIDAgMjQuMjMzIDMuNDk1YTg1LjcgODUuNyAwIDAgMCAyOC40ODYtNC44NjNhNy41IDcuNSAwIDAgMS0uNjEtMS4xODJ6bTczLjc2Ni00OC42NmE2NiA2NiAwIDAgMSAuNTc4IDguODJjMCA4LjcwNS0xLjYyNiAxOC40OTEtNi41MjMgMzAuNzI3bC0yNi4yMDMgNzUuNzU5YzI1LjUwMy0xNC44NzIgNDIuNjU3LTQyLjUwMSA0Mi42NTctNzQuMTQ4Yy4wMDEtMTQuOTE1LTMuODA4LTI4Ljk0LTEwLjUwOS00MS4xNTgiIC8+CgkJPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyNy45OTggMjhDNzIuODYgMjggMjggNzIuODU3IDI4IDEyNy45OTRjMCA1NS4xNDQgNDQuODYgOTkuOTk5IDk5Ljk5OCA5OS45OTljNTUuMTM1IDAgMTAwLjAwMi00NC44NTUgMTAwLjAwMi05OS45OTlDMjI3Ljk5OCA3Mi44NTcgMTgzLjEzMyAyOCAxMjcuOTk4IDI4bTAgMTk1LjQxYy01Mi42MSAwLTk1LjQxMy00Mi44MDQtOTUuNDEzLTk1LjQxNmMwLTUyLjYwOSA0Mi44MDItOTUuNDA5IDk1LjQxMy05NS40MDljNTIuNjA3IDAgOTUuNDA3IDQyLjggOTUuNDA3IDk1LjQwOWMwIDUyLjYxMi00Mi44IDk1LjQxNi05NS40MDcgOTUuNDE2IiAvPgoJPC9nPgo8L3N2Zz4K"
        },
        {
          "id": "site-1789765016916",
          "name": "Ai星码",
          "url": "https://aixmb.com/",
          "description": "教程博客",
          "icon": "https://www.faviconextractor.com/favicon/aixmb.com"
        },
        {
          "id": "site-1789765076932",
          "name": "廖雪峰",
          "url": "https://liaoxuefeng.com/index.html",
          "description": "编程学习网站",
          "icon": "https://www.faviconextractor.com/favicon/liaoxuefeng.com"
        }
      ]
    },
    {
      "id": "entertainment",
      "name": "影音娱乐",
      "icon": "🎬",
      "order": 6,
      "sites": [
        {
          "id": "bilibili",
          "name": "哔哩哔哩",
          "url": "https://www.bilibili.com",
          "description": "弹幕视频网站",
          "icon": "https://www.faviconextractor.com/favicon/www.bilibili.com"
        },
        {
          "id": "youtube",
          "name": "YouTube",
          "url": "https://www.youtube.com",
          "description": "视频分享平台",
          "icon": "/sitelogo/www.youtube.com.ico"
        },
        {
          "id": "site-1789769065847",
          "name": "道理鱼",
          "url": "https://daoliyu.xwgt.xyz/",
          "description": "音乐服务平台",
          "icon": "https://daoliyu.xwgt.xyz/logo.png"
        },
        {
          "id": "site-1789769136463",
          "name": "TuneScout",
          "url": "https://tunescout.xwgt.xyz/",
          "description": "音乐刮削平台",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNDggNDgiPgoJPHBhdGggZD0iTTAgMGg0OHY0OEgweiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9IiNFOTFFNjMiPgoJCTxjaXJjbGUgY3g9IjE5IiBjeT0iMzMiIHI9IjkiIC8+CgkJPHBhdGggZD0iTTI0IDZ2MjdoNFYxNGwxMSAzdi03eiIgLz4KCTwvZz4KPC9zdmc+Cg=="
        },
        {
          "id": "site-1789769185223",
          "name": "Navidrome",
          "url": "https://navidrome.xwgt.xyz/",
          "description": "音乐流媒体服务",
          "icon": "https://navidrome.xwgt.xyz/app/assets/android-icon-192x192-D_ka5daf.png"
        },
        {
          "id": "site-1789769318527",
          "name": "Go-Music-Dl",
          "url": "https://musicdw.xwgt.xyz/music/",
          "description": "音乐下载网站",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgODAgODAiPgoJPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iNCI+CgkJPHBhdGggc3Ryb2tlPSIjOWI1MWUwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zMiA1MFYxNCIgLz4KCQk8ZWxsaXBzZSBjeD0iMjMiIGN5PSI1MCIgZmlsbD0iIzU2Y2NmMiIgc3Ryb2tlPSIjNTZjY2YyIiByeD0iOSIgcnk9IjciIC8+CgkJPHBhdGggc3Ryb2tlPSIjOWI1MWUwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik02NiA1OFYyMiIgLz4KCQk8ZWxsaXBzZSBjeD0iNTciIGN5PSI1OCIgZmlsbD0iIzU2Y2NmMiIgc3Ryb2tlPSIjNTZjY2YyIiByeD0iOSIgcnk9IjciIC8+CgkJPHBhdGggc3Ryb2tlPSIjOWI1MWUwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Im0zMiAyNGwzNCA4TTMyIDE0bDM0IDgiIC8+Cgk8L2c+Cjwvc3ZnPgo="
        },
        {
          "id": "site-1789769431520",
          "name": "Songloft",
          "url": "https://songloft.xwgt.xyz/",
          "description": "小爱音箱连接播放器",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNDAgNDAiPgoJPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxwYXRoIGZpbGw9IiNmZjUyYTEiIHN0cm9rZT0iIzIzMWYyMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMzEuODYgMmE3LjM0IDcuMzQgMCAwIDAtNC41MiAxLjg1bDIuNDEgMy43NkwyOCAxMC42OWwyLjUgMi43N2wtMi44NyA0bC0uMjMtMy4yN0wyNCAxMS44bDEuNTItMy44OGwtMS4zOS0zLjQ3YTcuMiA3LjIgMCAwIDAtNC44OC0uMTVjLTQuNSAxLjI0LTYgNC41Ni00Ljg5IDguNjFDMTYuMDggMTkuMTQgMjMgMjEuODYgMjguMSAyM2EzLjE1IDMuMTUgMCAwIDAgMi0uMzdjNC40LTIuODUgOS45LTcuODMgOS4zNi0xNC4yNmMtLjM3LTQuMTktMi45NS02Ljc3LTcuNi02LjM3WiIgLz4KCQk8cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTMzLjM0IDMuNjdhMy41NSAzLjU1IDAgMCAxIDMuMTQgMS41IiAvPgoJCTxwYXRoIGZpbGw9IiM0OGVlZmYiIHN0cm9rZT0iIzIzMWYyMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjcuNjUgMjIuMWMwLS45NC0uNS0xLjU5LTEuODktMmEzOC40IDM4LjQgMCAwIDAtNy0uNjRjLTIuOTEtLjA4LTYuNyAwLTcuNTUuNTRhNC4xNiA0LjE2IDAgMCAwLTEuNDUgMi4zYy0uNDMgMS40Mi0xIDMuMzYtMS40NSA1Yy0zLjA4LS41OS01LjExLjk1LTUuODQgMy44MXMuMzggNS40NCAzLjczIDYuM3M1LjUyLS43MiA2LjMtMy43MmwxLjI4LTVjLjEtLjM2LjE5LS43NC4yOS0xLjEzYzEuMTkuMTIgMi41Ny4yIDMuODIuMjRhNSA1IDAgMCAwLTIuODcgMy42NGMtLjc3IDMgLjM5IDUuNDQgMy43MyA2LjNzNS40LS43NSA2LjMtMy43M2MuNzUtMi4yNCAyLjUxLTcuNzggMi42LTExLjkxWiIgLz4KCQk8cGF0aCBzdHJva2U9IiMyMzFmMjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTcuOTQgMjcuODZhNiA2IDAgMCAxIDMuMzMgMCIgLz4KCQk8cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjIuNDkgMjEuNDljMi45Mi4xNyAzLjIxLjMgMy4yMy43NyIgLz4KCQk8cGF0aCBmaWxsPSIjZmZlMjM2IiBzdHJva2U9IiMyMzFmMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuNjkgNS4yYy0uOTUuMy0yLjM1LjgtLjY5IDQuNnMyLjY1IDMuNTcgMy4xMiAzLjQzczEuNDItLjQ0LjY1LTQuNlM4LjYzIDQuOTEgNy42OSA1LjJabTEuODkgMTAuNzVhMS40OCAxLjQ4IDAgMSAwIDIuOTYgMGExLjQ4IDEuNDggMCAwIDAtMi45NiAwWm0tOC4yNy01LjY2Yy0uNjYuNDItMS42MyAxLjA3LjQ2IDMuNjRzMi43NyAyLjE4IDMuMSAyczEtLjYzLS40Ni0zLjY0cy0yLjQxLTIuNDItMy4xLTJaTTUgMTguMTRhMS4xNyAxLjE3IDAgMSAwIDIuMzQgMGExLjE3IDEuMTcgMCAwIDAtMi4zNCAwWiIgLz4KCTwvZz4KPC9zdmc+Cg=="
        }
      ]
    },
    {
      "id": "office",
      "name": "效率工具",
      "icon": "⚡",
      "order": 7,
      "sites": [
        {
          "id": "notion",
          "name": "Notion",
          "url": "https://www.notion.so",
          "description": "全能工作空间",
          "icon": "/sitelogo/www.notion.so.ico"
        },
        {
          "id": "slack",
          "name": "Slack",
          "url": "https://slack.com",
          "description": "团队协作工具",
          "icon": "/sitelogo/slack.com.ico"
        },
        {
          "id": "trello",
          "name": "Trello",
          "url": "https://trello.com",
          "description": "项目管理工具",
          "icon": "/sitelogo/trello.com.ico"
        },
        {
          "id": "feishu",
          "name": "飞书",
          "url": "https://www.feishu.cn",
          "description": "企业协作平台",
          "icon": "/sitelogo/www.feishu.cn.ico"
        },
        {
          "id": "site-1789754233672",
          "name": "QingLong-Panel",
          "url": "https://ql.xwgt.xyz/dashboard",
          "description": "脚本自动化运行平台",
          "icon": "https://qn.whyour.cn/logo.png"
        },
        {
          "id": "site-1789754379384",
          "name": "Lucky",
          "url": "https://lucky.xwgt.xyz/lucky/#/login",
          "description": "网络管理平台",
          "icon": "https://lucky.xwgt.xyz/lucky/logo.svg"
        },
        {
          "id": "site-1789754643360",
          "name": "VaulWarden",
          "url": "https://vaul.xwgt.xyz/#/login",
          "description": "私有密码管理器",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwLjg0ZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTgyIDIxOCI+Cgk8cGF0aCBkPSJNMCAwaDE4MnYyMThIMHoiIGZpbGw9Im5vbmUiIC8+Cgk8cGF0aCBmaWxsPSIjMTc1ZGRjIiBkPSJNMTc5LjMwNCAyLjY5QzE3Ny40OTguODg3IDE3NS4zNTggMCAxNzIuOTEzIDBIOS4wODZjLTIuNDczIDAtNC41ODUuODg3LTYuMzkgMi42OUMuODg4IDQuNDkyIDAgNi42MjcgMCA5LjA2N3YxMDlxMCAxMi4xODcgNC43NTEgMjQuMjA3YzMuMTY4IDcuOTg2IDcuMTE0IDE1LjA4NCAxMS44MSAyMS4yOTVjNC42OTUgNi4xODQgMTAuMjggMTIuMjI5IDE2Ljc4MiAxOC4xMDdzMTIuNTA0IDEwLjczMSAxNy45NzggMTQuNjEzYTIzMCAyMzAgMCAwIDAgMTcuMiAxMS4wMDhjNS45NzQgMy40NjYgMTAuMjI1IDUuNzk1IDEyLjcyNiA3LjAxNWMyLjUgMS4yMiA0LjUyOSAyLjE5MSA2LjAzIDIuODI4YzEuMTM5LjU1NSAyLjM2MS44NiAzLjY5NS44NnMyLjU1Ni0uMjc3IDMuNjk2LS44NmMxLjUyOC0uNjY1IDMuNTI4LTEuNjA4IDYuMDU3LTIuODI4YzIuNTAxLTEuMjIgNi43NTItMy41NzcgMTIuNzI2LTcuMDE1YTIzMCAyMzAgMCAwIDAgMTcuMi0xMS4wMDhjNS41MDEtMy44ODIgMTEuNTAzLTguNzYyIDE4LjAwNS0xNC42MTNjNi41MDItNS44NzggMTIuMDg3LTExLjg5NiAxNi43ODMtMTguMTA3czguNjE0LTEzLjI4MiAxMS44MDktMjEuMjk1cTQuNzUyLTExLjk3OSA0Ljc1MS0yNC4yMDdWOS4wOTVjLjAyOC0yLjQ2OC0uODg5LTQuNjAzLTIuNjk1LTYuNDA1bS0yMS4xMTcgMTE2LjQwM2MwIDM5LjQ1OC02Ny4xODcgNzMuNDUyLTY3LjE4NyA3My40NTJWMjMuMzQ3aDY3LjE4N3oiIC8+Cjwvc3ZnPgo="
        },
        {
          "id": "site-1789754678000",
          "name": "NodeWarfen",
          "url": "https://warden.xwtx.eu.cc/",
          "description": "CloudFlare 部署 Bitwarden 密码管理器",
          "icon": "https://www.faviconextractor.com/favicon/warden.xwtx.eu.cc"
        },
        {
          "id": "site-1789754807704",
          "name": "云图",
          "url": "https://cloudimgs.xwgt.xyz/",
          "description": "私人图床",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTYgMTYiPgoJPHBhdGggZD0iTTAgMGgxNnYxNkgweiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CgkJPHBhdGggc3Ryb2tlPSIjY2FkM2Y1IiBkPSJNNC41IDQuNUgxMmMuODMgMCAxLjUuNjcgMS41IDEuNXYuNW0tNy41IDdIMkExLjUgMS41IDAgMCAxIC41IDEyVjMuNWExIDEgMCAwIDEgMS0xaDVhMSAxIDAgMCAxIDEgMXYxIiAvPgoJCTxwYXRoIHN0cm9rZT0iIzkxZDdlMyIgZD0iTTcuNSAxMi40MjljMC0xLjE0Mi44MzQtMi4wNjggMS44NjMtMi4wNjhjLjE1Ny0uODEzLjcxNy0xLjQ3NyAxLjQ3LTEuNzQxYTIuMTUgMi4xNSAwIDAgMSAyLjE3Ny40NjFjLjU5Ni41NS44NjUgMS4zODguNzA4IDIuMmguMzk2Yy43NjYgMCAxLjM4Ni43MiAxLjM4NiAxLjYxYzAgLjg4OC0uNjIgMS42MDgtMS4zODYgMS42MDhIOS4zNjNjLTEuMDI5LS4wMDItMS44NjMtLjkyOC0xLjg2My0yLjA3IiAvPgoJPC9nPgo8L3N2Zz4K"
        },
        {
          "id": "site-1789754882240",
          "name": "Sanyue ImgHub",
          "url": "https://img.xwgt.xyz/",
          "description": "部署在 CloudFlare 的私人图床",
          "icon": "https://www.faviconextractor.com/favicon/img.xwgt.xyz"
        },
        {
          "id": "site-1789755020120",
          "name": "Edge Tunnel",
          "url": "https://edgetunnel.xwtx.eu.cc/",
          "description": "部署在 CloudFlare 的 VPN",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgoJPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiNmMTU4MzMiIGQ9Ik0xMi4wMDggMEE4MjMgODIzIDAgMCAwIDEuNTkgNi4wNDNWMThjMy41NzggMi4wODcgNy4yMzggNC4yNzQgMTAuNDE4IDZjMy45MjgtMi4yNjcgNi43MS0zLjg2OCAxMC40MDItNnYtMy4wNDNsLTEuMDQ1LjZ2MS44bC0xLjU0NS45bC0xLjU2LS45di0xLjhsMS41Ni0uODg1di0uMDAybC4yNjguMTU2YTggOCAwIDAgMCAuNDA0LTEuNzU0di0uMDAyYTkgOSAwIDAgMCAuMDcyLTEuMDcyYTEwIDEwIDAgMCAwLS4wNzItMS4xMjdhOSA5IDAgMCAwLS41MTUtMS45N3YtLjAwM2E4LjEgOC4xIDAgMCAwLTEuMzAxLTIuMjQyYTcgNyAwIDAgMC0uNjE1LS42OTlhMTAgMTAgMCAwIDAtLjg0Ni0uNzI4YTggOCAwIDAgMC0xLjkwMi0xLjExNmE1IDUgMCAwIDAtLjU4Ni0uMjEzdi0uOTU3cS42MTYuMTc3IDEuMi40NDJhOS4yIDkuMiAwIDAgMSAxLjYxOC45NDNhOS40IDkuNCAwIDAgMSAxLjE1OC45ODZxLjQwOS40MTYuNzc0Ljg3MmMuNTMyLjY4Ni45NyAxLjQ0IDEuMzAyIDIuMjQ0aC0uMDAyYTkuNSA5LjUgMCAwIDEgLjY0NSAyLjYxM3EuMDYxLjQ3Ni4wNTYuOTU3YzAgLjMxNC0uMDE0LjYxNC0uMDQzLjkxNGMtLjA4Mi44MzgtLjM3IDEuNzg2LS41NDIgMi4zNzNsLjQ3Mi4yN2wxLjA0NS0uNjAyVjguOTg2bC0xLjMwMy0uNzQydi0uMDAybDEuMzAzLjc0NFY2Yy0zLjU2LTIuMDU3LTcuMjEyLTQuMTU0LTEwLjQwMi02bTguMDggMTQuODI2Yy0uMDIuMDUyLjAwMy4wMDIuMDA0LjAwMnpNMTIuMDM1IDEuMjEzbDEuNTYuOXYxLjgwMWwtMS41Ni44ODVsLTEuNTQ1LS44ODVoLS4wMDJ2LS4zMjhhOC41IDguNSAwIDAgMC0xLjc0NC41MTZhOC4yIDguMiAwIDAgMC0xLjg4OSAxLjA3bC0uMDAxLjAwMmE3IDcgMCAwIDAtLjkuNzgzYTkgOSAwIDAgMC0uNjE2LjY3MmE4LjggOC44IDAgMCAwLTEuMyAyLjIyOGwuMjI4LjEyN2wxLjI4Ny0uNzQybDEuMjAzLjY4NmMxLjkyOS0xLjExMiAzLjM5Ny0xLjk2MSA1LjI1Mi0zLjAxNGwuMDI3LjAxNGMxLjkyNiAxLjExNCAzLjM5OCAxLjk1NSA1LjIzOCAzLjAyOWMuMDI4IDEuOTk3LjAxNCA0LjA2NC4wMTQgNi4wODZjLTEuODc0IDEuMDg0LTMuNzUzIDIuMTYtNS4yOCAzLjA0M2E4NjAgODYwIDAgMCAxLTUuMjk0LTMuMDQzVjguOTU3bC4wNDMtLjAyN2wtMS4yMDMtLjY4OGwtMS4yODcuNzQ0bC0uMjI5LS4xMjloLS4wMDJhOC40IDguNCAwIDAgMC0uNTMgMi4wNTdxLS4wNjcuNTQtLjA3IDEuMDg2cS4wMDMuNTE3LjA3IDEuMDI3di4wMDJjLjAxNS4yMTUuMDYuNDI5LjEwMi42NDNsLS44My40ODRhNyA3IDAgMCAxLS4yLTEuMTk5QTcgNyAwIDAgMSAyLjUyIDEyYzAtLjMyOS4wMjgtLjY3Mi4wNTYtMWE5LjggOS44IDAgMCAxIC42NTgtMi42YTkuNCA5LjQgMCAwIDEgMS4zMDMtMi4yNDRjLjI0My0uMy41LS41Ny43NTgtLjg0MnEuNTU2LS41NTggMS4yMDMtMS4wMTNxLTEuODIzLS4xMjUgMC0uMDAyYTkuNCA5LjQgMCAwIDEgMS42NDUtLjk0MmExMCAxMCAwIDAgMSAyLjM0Ny0uN2wtLjAwMi0uNTQybC0xLjA0My0uNjAxbDEuMDQ1LjZ6bTAgLjc3M2wtLjg4Ny41MTR2MS4wMjdsLjg4Ny41MTZsLjg4Ny0uNTE2VjIuNVptLS4wMyA2LjkyOGMtLjkzNS41MzItMS44ODggMS4wODQtMi42ODkgMS41NDN2My4wODZjLjkzMy41MzUgMS44OTIgMS4wOTUgMi42OTIgMS41NTdjLjkyNi0uNTY1IDEuODY1LTEuMDkzIDIuNjc2LTEuNTU3di0zLjA4NmMtLjk0NS0uNTQyLTEuODU3LTEuMDc0LTIuNjc4LTEuNTQzWm0tNy43NCA1Ljc1OGwxLjU0Ni44ODV2MS44bC0uMzI5LjE4NnEuMjE5LjI2Ni40NzEuNXEuNDE3LjQzMi45MDIuNzg1YTggOCAwIDAgMCAxLjgzIDEuMDU5aC4wMDJhOCA4IDAgMCAwIDIuMDYxLjU3cS42MjYuMDg3IDEuMjU4LjA4NmE4LjQgOC40IDAgMCAwIDEuMzMyLS4xYTguNiA4LjYgMCAwIDAgMi4wMTctLjU3MmE4IDggMCAwIDAgMS44Ni0xLjFjLjE3Mi0uMTE0LjMxNS0uMjQyLjQ3Mi0uMzdsLjgzLjQ3YTEwIDEwIDAgMCAxLS45NDUuNzg3bC45NDYuNTQxbDEuMzAyLS43NTZsLTEuMzAyLjc1OGwtLjk0Ni0uNTQzYy0uNTE2LjM3LTEuMDY3LjY5LTEuNjQ0Ljk1NWwtLjAwMi4wMDJhOS41IDkuNSAwIDAgMS0yLjU4OC43NTZxLS42NjIuMDg2LTEuMzMuMDg2YTEyIDEyIDAgMCAxLTEuMjYtLjA3MnYuMDAyYTkuNCA5LjQgMCAwIDEtMi42MDUtLjc0NGE5IDkgMCAwIDEtMS42ODgtLjk3MWE5LjYgOS42IDAgMCAxLTEuNzc1LTEuNjU4aC0uMDAybC0uNDEyLjI0NGwtMS41Ni0uOXYtMS44MDF6bTAgLjc1NmwtLjg4Ni41MTV2MS4wMjhsLjg4Ny41MTVsLjg4Ni0uNTE1di0xLjAyOHptMTUuNTU1IDBsLS45MDIuNTE1djEuMDI4bC45MDIuNTE1bC44ODctLjUxNXYtMS4wMjh6IiAvPgo8L3N2Zz4K"
        },
        {
          "id": "site-1789762877519",
          "name": "Memos",
          "url": "https://memos.xwgt.xyz",
          "description": "个人备忘录",
          "icon": "https://memos.xwgt.xyz/full-logo.webp"
        },
        {
          "id": "site-1789765157156",
          "name": "Pages CMS",
          "url": "https://cms.xwgt.xyz/sign-in?redirect=%2Fsmile-wa%2Fhugo-blog%2Fmain%2Fcollection%2Fpost",
          "description": "HUGO 博客后台",
          "icon": "https://www.faviconextractor.com/favicon/cms.xwgt.xyz"
        },
        {
          "id": "site-1789765225525",
          "name": "BookOrbit",
          "url": "https://book.xwgt.xyz/login?redirect=/",
          "description": "个人图书馆",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzYgMzYiPgoJPHBhdGggZD0iTTAgMGgzNnYzNkgweiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiM1NTM3ODgiIGQ9Ik0xNSAzMWMwIDIuMjA5LS43OTEgNC0zIDRINWMtNCAwLTQtMTQgMC0xNGg3YzIuMjA5IDAgMyAxLjc5MSAzIDR6IiAvPgoJPHBhdGggZmlsbD0iIzkyNjZjYyIgZD0iTTM0IDMzaC0xVjIzaDFhMSAxIDAgMSAwIDAtMkgxMGMtNCAwLTQgMTQgMCAxNGgyNGExIDEgMCAxIDAgMC0yIiAvPgoJPHBhdGggZmlsbD0iI2NjZDZkZCIgZD0iTTM0LjE3MiAzM0gxMWMtMiAwLTItMTAgMC0xMGgyMy4xNzJjMS4xMDQgMCAxLjEwNCAxMCAwIDEwIiAvPgoJPHBhdGggZmlsbD0iIzk5YWFiNSIgZD0iTTExLjUgMjVoMjMuMzVjLS4xMzUtMS4xNzUtLjM2LTItLjY3OC0ySDExYy0xLjY1MSAwLTEuOTM4IDYuODA4LS44NjMgOS4xODhDOS43NDUgMjkuMjI5IDEwLjE5OSAyNSAxMS41IDI1IiAvPgoJPHBhdGggZmlsbD0iIzI2OSIgZD0iTTEyIDhhNCA0IDAgMCAxLTQgNEg0QzAgMTIgMCAxIDQgMWg0YTQgNCAwIDAgMSA0IDR6IiAvPgoJPHBhdGggZmlsbD0iIzU1YWNlZSIgZD0iTTMxIDEwaC0xVjNoMWExIDEgMCAxIDAgMC0ySDdDMyAxIDMgMTIgNyAxMmgyNGExIDEgMCAxIDAgMC0yIiAvPgoJPHBhdGggZmlsbD0iI2NjZDZkZCIgZD0iTTMxLjE3MiAxMEg4Yy0yIDAtMi03IDAtN2gyMy4xNzJjMS4xMDQgMCAxLjEwNCA3IDAgNyIgLz4KCTxwYXRoIGZpbGw9IiM5OWFhYjUiIGQ9Ik04IDVoMjMuOTI1Yy0uMTE0LTEuMTI1LS4zNjQtMi0uNzUzLTJIOEM2LjgwNyAzIDYuMzMxIDUuNDg5IDYuNTYyIDcuNUM2LjcxOCA2LjE0MiA3LjE5MyA1IDggNSIgLz4KCTxwYXRoIGZpbGw9IiNmNDkwMGMiIGQ9Ik0yMCAxN2E0IDQgMCAwIDEtNCA0SDZjLTQgMC00LTkgMC05aDEwYTQgNCAwIDAgMSA0IDR6IiAvPgoJPHBhdGggZmlsbD0iI2ZmYWMzMyIgZD0iTTM1IDE5aC0xdi01aDFhMSAxIDAgMSAwIDAtMkgxNWMtNCAwLTQgOSAwIDloMjBhMSAxIDAgMSAwIDAtMiIgLz4KCTxwYXRoIGZpbGw9IiNjY2Q2ZGQiIGQ9Ik0zNS4xNzIgMTlIMTZjLTIgMC0yLTUgMC01aDE5LjE3MmMxLjEwNCAwIDEuMTA0IDUgMCA1IiAvPgoJPHBhdGggZmlsbD0iIzk5YWFiNSIgZD0iTTE2IDE2aDE5Ljk4NGMtLjA2NS0xLjA2Mi0uMzM0LTItLjgxMi0ySDE2Yy0xLjI3NCAwLTEuNzMzIDIuMDI3LTEuMzgzIDMuNWMuMTk4LS44MzkuNjU3LTEuNSAxLjM4My0xLjUiIC8+Cjwvc3ZnPgo="
        },
        {
          "id": "site-1789767155794",
          "name": "SoNovel",
          "url": "https://novel.xwgt.xyz/",
          "description": "小说下载站",
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNjQgNjQiPgoJPHBhdGggZD0iTTAgMGg2NHY2NEgweiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiMyNTYzODIiIGQ9Im01NC45IDM5LjdsNy4zIDcuNmwtMzIuMSAxNi4xcy00LjIgMi4xLTYuMi0xLjJjLTgtMTMgMzEtMjIuNSAzMS0yMi41IiAvPgoJPHBhdGggZmlsbD0iI2Q5ZTNlOCIgZD0iTTI5LjIgNTMuOXMtNi4xIDIuMy01IDYuNmMxLjIgNC41IDYuMSAxLjggNi4xIDEuOGwzMC41LTE1cy0xLjctNC44IDEuNC04eiIgLz4KCTxwYXRoIGZpbGw9IiM0MmFkZTIiIGQ9Ik0zNC40IDguOUw2My42IDM5TDI5LjEgNTMuM0w3IDE2Ljd6IiAvPgoJPHBhdGggZmlsbD0iIzk0OTg5YiIgZD0ibTYwLjcgNDIuNmwtMjAuNCA4LjhsMjAtOS43em0tLjMgMi42bC0yMS43IDkuNUw2MCA0NC4zem0uMiAxLjVMMzIuOSA1OS40bDI3LjMtMTMuNnoiIC8+Cgk8cGF0aCBmaWxsPSIjNDI4YmMxIiBkPSJNMjMuOCA2Mi4xYy0zLjQtNy41IDUuMy04LjggNS4zLTguOEw3IDE2LjdzLTUtLjEtNSA1LjRjMCAyLjMgMSA0IDEgNHoiIC8+Cgk8cGF0aCBmaWxsPSIjNTQ3NzI1IiBkPSJtOC43IDMyLjJsLTcuMyA3LjZsMzIuMSAxNi4xczQuMiAyLjEgNi4yLTEuMmM4LTEzLTMxLTIyLjUtMzEtMjIuNSIgLz4KCTxwYXRoIGZpbGw9IiNkOWUzZTgiIGQ9Ik0zNC4zIDQ2LjRzNi4xIDIuMyA1IDYuNmMtMS4yIDQuNS02IDEuOC02IDEuOGwtMzAuNS0xNXMxLjctNC44LTEuNC04eiIgLz4KCTxwYXRoIGZpbGw9IiM4M2JmNGYiIGQ9Ik0yOS4yIDEuNEwwIDMxLjVsMzQuNSAxNC4zTDU2LjYgOS4yeiIgLz4KCTxwYXRoIGZpbGw9IiM5NDk4OWIiIGQ9Im0zLjIgMzQuMmwyMCA5LjdsLTIwLjQtOC44em0uNCAyLjZsMjEuMiAxMC40bC0yMS43LTkuNXptLS4yIDEuNWwyNy4yIDEzLjZMMi45IDM5LjJ6IiAvPgoJPHBhdGggZmlsbD0iIzY5OTYzNSIgZD0iTTM5LjggNTQuNmMzLjQtNy41LTUuMy04LjgtNS4zLTguOEw1Ni42IDkuMnM1LS4xIDUgNS40YzAgMi4zLTEgNC0xIDR6IiAvPgoJPHBhdGggZmlsbD0iIzk2MmMyYyIgZD0ibTU2LjcgMjZsNi4xIDYuNGwtMjcuMSAxMy41cy0zLjYgMS43LTUuMy0xQzIzLjggMzQgNTYuNyAyNiA1Ni43IDI2IiAvPgoJPHBhdGggZmlsbD0iI2Q5ZTNlOCIgZD0iTTM1IDM4cy01LjIgMS45LTQuMiA1LjZjMSAzLjggNS4xIDEuNSA1LjEgMS41bDI1LjctMTIuN3MtMS40LTQgMS4yLTYuN3oiIC8+Cgk8cGF0aCBmaWxsPSIjZWQ0YzVjIiBkPSJNMzkuNCAwTDY0IDI1LjRMMzQuOSAzNy41TDE2LjIgNi42eiIgLz4KCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Im00MC4xIDUuOGw0LjggNS4zbC0xNy43IDYuN0wyMyAxMXoiIC8+Cgk8cGF0aCBmaWxsPSIjOTQ5ODliIiBkPSJtNjEuNiAyOC41bC0xNy4yIDcuM2wxNi44LTguMnptLS4yIDIuMkw0MyAzOC42bDE4LTguOHptLjIgMS4yTDM4LjIgNDIuNkw2MS4xIDMxeiIgLz4KCTxwYXRoIGZpbGw9IiNjOTQ3NDciIGQ9Ik0zMC41IDQ0LjljLTIuOC02LjMgNC41LTcuNCA0LjUtNy40TDE2LjIgNi42cy00LjMtLjEtNC4zIDQuNWMwIDEuOS44IDMuNC44IDMuNHoiIC8+Cjwvc3ZnPgo="
        }
      ]
    }
  ],
  "title": "云中书柜",
  "search": "bing",
  "icp": ""
}
