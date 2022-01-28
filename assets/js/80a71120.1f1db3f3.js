"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4576],{82155:function(n){n.exports=JSON.parse('{"functions":[{"name":"new","desc":"Create a new custom Component class.\\n\\n```lua\\nlocal MyComponent = Component.new({Tag = \\"MyComponent\\"})\\n```\\n\\nA full example might look like this:\\n\\n```lua\\nlocal MyComponent = Component.new({\\n\\tTag = \\"MyComponent\\",\\n\\tAncestors = {workspace},\\n\\tExtensions = {Logger}, -- See Logger example within the example for the Extension type\\n})\\n\\nlocal AnotherComponent = require(somewhere.AnotherComponent)\\n\\n-- Optional if UpdateRenderStepped should use BindToRenderStep:\\nMyComponent.RenderPriority = Enum.RenderPriority.Camera.Value\\n\\nfunction MyComponent:Construct()\\n\\tself.MyData = \\"Hello\\"\\nend\\n\\nfunction MyComponent:Start()\\n\\tlocal another = self:GetComponent(AnotherComponent)\\n\\tanother:DoSomething()\\nend\\n\\nfunction MyComponent:Stop()\\n\\tself.MyData = \\"Goodbye\\"\\nend\\n\\nfunction MyComponent:HeartbeatUpdate(dt)\\nend\\n\\nfunction MyComponent:SteppedUpdate(dt)\\nend\\n\\nfunction MyComponent:RenderSteppedUpdate(dt)\\nend\\n```","params":[{"name":"config","desc":"","lua_type":"ComponentConfig"}],"returns":[{"desc":"","lua_type":"ComponentClass"}],"function_type":"static","source":{"line":278,"path":"modules/component/init.lua"}},{"name":"GetAll","desc":"Gets a table array of all existing component objects. For example,\\nif there was a component class linked to the \\"MyComponent\\" tag,\\nand three Roblox instances in your game had that same tag, then\\ncalling `GetAll` would return the three component instances.\\n\\n```lua\\nlocal MyComponent = Component.new({Tag = \\"MyComponent\\"})\\n\\n-- ...\\n\\nlocal components = MyComponent:GetAll()\\nfor _,component in ipairs(components) do\\n\\tcomponent:DoSomethingHere()\\nend\\n```","params":[],"returns":[{"desc":"","lua_type":"{Component}"}],"function_type":"method","source":{"line":484,"path":"modules/component/init.lua"}},{"name":"FromInstance","desc":"Gets an instance of a component class from the given Roblox\\ninstance. Returns `nil` if not found.\\n\\n```lua\\nlocal MyComponent = require(somewhere.MyComponent)\\n\\nlocal myComponentInstance = MyComponent:FromInstance(workspace.SomeInstance)\\n```","params":[{"name":"instance","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Component?"}],"function_type":"method","source":{"line":501,"path":"modules/component/init.lua"}},{"name":"WaitForInstance","desc":"Resolves a promise once the component class is present on a given\\nRoblox instance.\\n\\nAn optional `timeout` can be provided to reject the promise if it\\ntakes more than `timeout` seconds to resolve. If no timeout is\\nsupplied, `timeout` defaults to 60 seconds.\\n\\n```lua\\nlocal MyComponent = require(somewhere.MyComponent)\\n\\nMyComponent:WaitForInstance(workspace.SomeInstance):andThen(function(myComponentInstance)\\n\\t-- Do something with the component class\\nend)\\n```","params":[{"name":"instance","desc":"","lua_type":"Instance"},{"name":"timeout","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"Promise"}],"function_type":"method","source":{"line":524,"path":"modules/component/init.lua"}},{"name":"Construct","desc":"`Construct` is called before the component is started, and should be used\\nto construct the component instance.\\n\\n```lua\\nlocal MyComponent = Component.new({Tag = \\"MyComponent\\"})\\n\\nfunction MyComponent:Construct()\\n\\tself.SomeData = 32\\n\\tself.OtherStuff = \\"HelloWorld\\"\\nend\\n```","params":[],"returns":[],"function_type":"method","source":{"line":554,"path":"modules/component/init.lua"}},{"name":"Start","desc":"`Start` is called when the component is started. At this point in time, it\\nis safe to grab other components also bound to the same instance.\\n\\n```lua\\nlocal MyComponent = Component.new({Tag = \\"MyComponent\\"})\\nlocal AnotherComponent = require(somewhere.AnotherComponent)\\n\\nfunction MyComponent:Start()\\n\\t-- e.g., grab another component:\\n\\tlocal another = self:GetComponent(AnotherComponent)\\nend\\n```","params":[],"returns":[],"function_type":"method","source":{"line":572,"path":"modules/component/init.lua"}},{"name":"Stop","desc":"`Stop` is called when the component is stopped. This occurs either when the\\nbound instance is removed from one of the whitelisted ancestors _or_ when\\nthe matching tag is removed from the instance. This also means that the\\ninstance _might_ be destroyed, and thus it is not safe to continue using\\nthe bound instance (e.g. `self.Instance`) any longer.\\n\\nThis should be used to clean up the component.\\n\\n```lua\\nlocal MyComponent = Component.new({Tag = \\"MyComponent\\"})\\n\\nfunction MyComponent:Stop()\\n\\tself.SomeStuff:Destroy()\\nend\\n```","params":[],"returns":[],"function_type":"method","source":{"line":593,"path":"modules/component/init.lua"}},{"name":"GetComponent","desc":"Retrieves another component instance bound to the same\\nRoblox instance.\\n\\n```lua\\nlocal MyComponent = Component.new({Tag = \\"MyComponent\\"})\\nlocal AnotherComponent = require(somewhere.AnotherComponent)\\n\\nfunction MyComponent:Start()\\n\\tlocal another = self:GetComponent(AnotherComponent)\\nend\\n```","params":[{"name":"componentClass","desc":"","lua_type":"ComponentClass"}],"returns":[{"desc":"","lua_type":"Component?"}],"function_type":"method","source":{"line":613,"path":"modules/component/init.lua"}},{"name":"HeartbeatUpdate","desc":"If this method is present on a component, then it will be\\nautomatically connected to `RunService.Heartbeat`.\\n\\n:::note Method\\nThis is a method, not a function. This is a limitation\\nof the documentation tool which should be fixed soon.\\n:::\\n\\n```lua\\nlocal MyComponent = Component.new({Tag = \\"MyComponent\\"})\\n\\nfunction MyComponent:HeartbeatUpdate(dt)\\nend\\n```","params":[{"name":"dt","desc":"","lua_type":"number"}],"returns":[],"function_type":"static","source":{"line":638,"path":"modules/component/init.lua"}},{"name":"SteppedUpdate","desc":"If this method is present on a component, then it will be\\nautomatically connected to `RunService.Stepped`.\\n\\n:::note Method\\nThis is a method, not a function. This is a limitation\\nof the documentation tool which should be fixed soon.\\n:::\\n\\n```lua\\nlocal MyComponent = Component.new({Tag = \\"MyComponent\\"})\\n\\nfunction MyComponent:SteppedUpdate(dt)\\nend\\n```","params":[{"name":"dt","desc":"","lua_type":"number"}],"returns":[],"function_type":"static","source":{"line":658,"path":"modules/component/init.lua"}},{"name":"RenderSteppedUpdate","desc":"If this method is present on a component, then it will be\\nautomatically connected to `RunService.RenderStepped`. If\\nthe `[Component].RenderPriority` field is found, then the\\ncomponent will instead use `RunService:BindToRenderStep()`\\nto bind the function.\\n\\n:::note Method\\nThis is a method, not a function. This is a limitation\\nof the documentation tool which should be fixed soon.\\n:::\\n\\n```lua\\n-- Example that uses `RunService.RenderStepped` automatically:\\n\\nlocal MyComponent = Component.new({Tag = \\"MyComponent\\"})\\n\\nfunction MyComponent:RenderSteppedUpdate(dt)\\nend\\n```\\n```lua\\n-- Example that uses `RunService:BindToRenderStep` automatically:\\n\\nlocal MyComponent = Component.new({Tag = \\"MyComponent\\"})\\n\\n-- Defining a RenderPriority will force the component to use BindToRenderStep instead\\nMyComponent.RenderPriority = Enum.RenderPriority.Camera.Value\\n\\nfunction MyComponent:RenderSteppedUpdate(dt)\\nend\\n```","params":[{"name":"dt","desc":"","lua_type":"number"}],"returns":[],"function_type":"static","realm":["Client"],"source":{"line":695,"path":"modules/component/init.lua"}}],"properties":[{"name":"Started","desc":"Fired when a new instance of a component is started.\\n\\n```lua\\nlocal MyComponent = Component.new({Tag = \\"MyComponent\\"})\\n\\nMyComponent.Started:Connect(function(component) end)\\n```","lua_type":"Signal","tags":["Event"],"source":{"line":137,"path":"modules/component/init.lua"}},{"name":"Stopped","desc":"Fired when an instance of a component is stopped.\\n\\n```lua\\nlocal MyComponent = Component.new({Tag = \\"MyComponent\\"})\\n\\nMyComponent.Stopped:Connect(function(component) end)\\n```","lua_type":"Signal","tags":["Event"],"source":{"line":151,"path":"modules/component/init.lua"}}],"types":[{"name":"ExtensionFn","desc":"","lua_type":"(component) -> nil","source":{"line":12,"path":"modules/component/init.lua"}},{"name":"ExtensionShouldFn","desc":"","lua_type":"(component) -> boolean","source":{"line":18,"path":"modules/component/init.lua"}},{"name":"Extension","desc":"An extension allows the ability to extend the behavior of\\ncomponents. This is useful for adding injection systems or\\nextending the behavior of components by wrapping around\\ncomponent lifecycle methods.\\n\\nThe `ShouldConstruct` function can be used to indicate\\nif the component should actually be created. This must\\nreturn `true` or `false`. A component with multiple\\n`ShouldConstruct` extension functions must have them _all_\\nreturn `true` in order for the component to be constructed.\\nThe `ShouldConstruct` function runs _before_ all other\\nextension functions and component lifecycle methods.\\n\\nThe `ShouldExtend` function can be used to indicate if\\nthe extension itself should be used. This can be used in\\norder to toggle an extension on/off depending on whatever\\nlogic is appropriate. If no `ShouldExtend` function is\\nprovided, the extension will always be used if provided\\nas an extension to the component.\\n\\nAs an example, an extension could be created to simply log\\nwhen the various lifecycle stages run on the component:\\n\\n```lua\\nlocal Logger = {}\\nfunction Logger.Constructing(component) print(\\"Constructing\\", component) end\\nfunction Logger.Constructed(component) print(\\"Constructed\\", component) end\\nfunction Logger.Starting(component) print(\\"Starting\\", component) end\\nfunction Logger.Started(component) print(\\"Started\\", component) end\\nfunction Logger.Stopping(component) print(\\"Stopping\\", component) end\\nfunction Logger.Stopped(component) print(\\"Stopped\\", component) end\\n\\nlocal MyComponent = Component.new({Tag = \\"MyComponent\\", Extensions = {Logger}})\\n```\\n\\nSometimes it is useful for an extension to control whether or\\nnot a component should be constructed. For instance, if a\\ncomponent on the client should only be instantiated for the\\nlocal player, an extension might look like this, assuming the\\ninstance has an attribute linking it to the player\'s UserId:\\n```lua\\nlocal player = game:GetService(\\"Players\\").LocalPlayer\\n\\nlocal OnlyLocalPlayer = {}\\nfunction OnlyLocalPlayer.ShouldConstruct(component)\\n\\tlocal ownerId = component.Instance:GetAttribute(\\"OwnerId\\")\\n\\treturn ownerId == player.UserId\\nend\\n\\nlocal MyComponent = Component.new({Tag = \\"MyComponent\\", Extensions = {OnlyLocalPlayer}})\\n```\\n\\nIt can also be useful for an extension itself to turn on/off\\ndepending on various contexts. For example, let\'s take the\\nLogger from the first example, and only use that extension\\nif the bound instance has a Log attribute set to `true`:\\n```lua\\nfunction Logger.ShouldExtend(component)\\n\\treturn component.Instance:GetAttribute(\\"Log\\") == true\\nend\\n```","fields":[{"name":"ShouldExtend","lua_type":"ExtensionShouldFn?","desc":""},{"name":"ShouldConstruct","lua_type":"ExtensionShouldFn?","desc":""},{"name":"Constructing","lua_type":"ExtensionFn?","desc":""},{"name":"Constructed","lua_type":"ExtensionFn?","desc":""},{"name":"Starting","lua_type":"ExtensionFn?","desc":""},{"name":"Started","lua_type":"ExtensionFn?","desc":""},{"name":"Stopping","lua_type":"ExtensionFn?","desc":""},{"name":"Stopped","lua_type":"ExtensionFn?","desc":""}],"source":{"line":95,"path":"modules/component/init.lua"}},{"name":"ComponentConfig","desc":"Component configuration passed to `Component.new`.\\n\\n- If no Ancestors option is included, it defaults to `{workspace, game.Players}`.\\n- If no Extensions option is included, it defaults to a blank table `{}`.","fields":[{"name":"Tag","lua_type":"string","desc":"CollectionService tag to use"},{"name":"Ancestors","lua_type":"{Instance}?","desc":"Optional array of ancestors in which components will be started"},{"name":"Extensions","lua_type":"{Extension}?","desc":"Optional array of extension objects"}],"source":{"line":118,"path":"modules/component/init.lua"}}],"name":"Component","desc":"Bind components to Roblox instances using the Component class and CollectionService tags.","source":{"line":227,"path":"modules/component/init.lua"}}')}}]);