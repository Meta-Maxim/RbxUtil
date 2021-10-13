"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[178],{9607:function(e){e.exports=JSON.parse('{"functions":[{"name":"Observe","desc":"Observes the instance. The handler is called anytime the\\ninstance comes into existence, and the janitor given is\\ncleaned up when the instance goes away.\\n\\nTo stop observing, disconnect the returned connection.","params":[{"name":"handler","desc":"","lua_type":"(instance: Instance, janitor: Janitor) -> nil"}],"returns":[{"desc":"","lua_type":"Connection"}],"function_type":"method","source":{"line":101,"path":"modules/streamable/Streamable.lua"}},{"name":"Destroy","desc":"Destroys the Streamable.","params":[],"returns":[],"function_type":"method","source":{"line":112,"path":"modules/streamable/Streamable.lua"}}],"properties":[{"name":"Instance","desc":"The current instance represented by the Streamable. If this\\nis being observed, it will always exist. If not currently\\nbeing observed, this will be `nil`.","lua_type":"Instance","source":{"line":32,"path":"modules/streamable/Streamable.lua"}}],"types":[],"name":"Streamable","desc":"Watches the existence of an instance within a specific parent.\\n\\n```lua\\nlocal Streamable = require(packages.Streamable).Streamable\\n```","source":{"line":41,"path":"modules/streamable/Streamable.lua"}}')}}]);