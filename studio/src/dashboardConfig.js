export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6335c61348af760046eab1b3",
                  title: "Sanity Studio",
                  name: "slower-motions-blog-studio",
                  apiId: "6540a57a-90bd-4269-8a16-bf6b2916a9d3",
                },
                {
                  buildHookId: "6335c6134d09760293d891c0",
                  title: "Blog Website",
                  name: "slower-motions-blog",
                  apiId: "c6f95b9a-6096-41c8-ba25-0f729598d148",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/tomwrankmore/slower-motions-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://slower-motions-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
