/**
 * 
 */

// hide other tab contents
function showGraph(){
	
    $("#sample").show();
    $(".graphOptions").hide();
    $(".graphInput").hide();
}
function showGraphArea(){
	if ($("#sample").children().length ==0)
		{
			init();
			loadGraph(GraphJSON.graphProperties);
		}else{
			loadGraph(GraphJSON.graphProperties);
		}
	$("#sample").show();
	
	$(".graphInput").hide();
}

function showGraphInput(){
	$("#sample").hide();
	$(".graphInput").show();
}

var newDiagram;
var loginDiagram;
var registerDiagram;
  function initLogin() {
    // init for these samples -- you don't need to call this
    var $ = go.GraphObject.make;  // for conciseness in defining templates
    var yellowgrad = $(go.Brush, "Linear", { 0: "rgb(254, 201, 0)", 1: "rgb(254, 162, 0)" });
    var greengrad = $(go.Brush, "Linear", { 0: "#98FB98", 1: "#9ACD32" });
    var bluegrad = $(go.Brush, "Linear", { 0: "#B0E0E6", 1: "#87CEEB" });
    var redgrad = $(go.Brush, "Linear", { 0: "#C45245", 1: "#7D180C" });
    var whitegrad = $(go.Brush, "Linear", { 0: "#F0F8FF", 1: "#E6E6FA" });
    var bigfont = "bold 13pt Helvetica, Arial, sans-serif";
    var smallfont = "bold 11pt Helvetica, Arial, sans-serif";
    // Common text styling
    function textStyle() {
      return {
        margin: 6,
        wrap: go.TextBlock.WrapFit,
        textAlign: "center",
        editable: true,
        font: bigfont
      }
    }
    loginDiagram =
      $(go.Diagram, "loginDiv",
        {
          // have mouse wheel events zoom in and out instead of scroll up and down
          "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
          allowDrop: true,  // support drag-and-drop from the Palette
          initialAutoScale: go.Diagram.Uniform,
          "linkingTool.direction": go.LinkingTool.ForwardsOnly,
          initialContentAlignment: go.Spot.Center,
          layout: $(go.LayeredDigraphLayout, { isInitial: false, isOngoing: false, layerSpacing: 50 }),
          "undoManager.isEnabled": true
        });
    // when the document is modified, add a "*" to the title and enable the "Save" button
    loginDiagram.addDiagramListener("Modified", function(e) {
      var button = document.getElementById("SaveButton");
      if (button) button.disabled = !loginDiagram.isModified;
      var idx = document.title.indexOf("*");
      if (loginDiagram.isModified) {
        if (idx < 0) document.title += "*";
      } else {
        if (idx >= 0) document.title = document.title.substr(0, idx);
      }
    });
    var defaultAdornment =
      $(go.Adornment, "Spot",
        $(go.Panel, "Auto",
          $(go.Shape, { fill: null, stroke: "dodgerblue", strokeWidth: 4 }),
          $(go.Placeholder)),
        // the button to create a "next" node, at the top-right corner
        $("Button",
          { alignment: go.Spot.TopRight,
            click: addNodeAndLink },  // this function is defined below
          new go.Binding("visible", "", function(a) { return !a.diagram.isReadOnly; }).ofObject(),
          $(go.Shape, "PlusLine", { desiredSize: new go.Size(6, 6) })
        )
      );
    // define the Node template
    loginDiagram.nodeTemplate =
      $(go.Node, "Auto",
        { selectionAdornmentTemplate: defaultAdornment },
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        // define the node's outer shape, which will surround the TextBlock
        $(go.Shape, "Rectangle",
          { fill: yellowgrad, stroke: "black",
            portId: "", fromLinkable: true, toLinkable: true, cursor: "pointer",
            toEndSegmentLength: 50, fromEndSegmentLength: 40 }),
        $(go.TextBlock, "Page",
          { margin: 6,
            font: bigfont,
            editable: true },
          new go.Binding("text", "text").makeTwoWay()));
    loginDiagram.nodeTemplateMap.add("Source",
      $(go.Node, "Auto",
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        $(go.Shape, "RoundedRectangle",
          { fill: bluegrad,
          portId: "", fromLinkable: true, cursor: "pointer", fromEndSegmentLength: 40}),
        $(go.TextBlock, "Source", textStyle(),
          new go.Binding("text", "text").makeTwoWay())
        ));
    loginDiagram.nodeTemplateMap.add("DesiredEvent",
      $(go.Node, "Auto",
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        $(go.Shape, "RoundedRectangle",
          { fill: greengrad, portId: "", toLinkable: true, toEndSegmentLength: 50 }),
        $(go.TextBlock, "Success!", textStyle(),
          new go.Binding("text", "text").makeTwoWay())
        ));
    // Undesired events have a special adornment that allows adding additional "reasons"
    var UndesiredEventAdornment =
      $(go.Adornment, "Spot",
        $(go.Panel, "Auto",
          $(go.Shape, { fill: null, stroke: "dodgerblue", strokeWidth: 4 }),
          $(go.Placeholder)),
        // the button to create a "next" node, at the top-right corner
        $("Button",
          { alignment: go.Spot.BottomRight,
            click: addReason },  // this function is defined below
          new go.Binding("visible", "", function(a) { return !a.diagram.isReadOnly; }).ofObject(),
          $(go.Shape, "TriangleDown", { desiredSize: new go.Size(10, 10) })
        )
      );
    var reasonTemplate = $(go.Panel, "Horizontal",
      $(go.TextBlock, "Attribute",
        {
          margin: new go.Margin(4,0,0,0),
          maxSize: new go.Size(200, NaN),
          wrap: go.TextBlock.WrapFit,
          stroke: "whitesmoke",
          editable: true,
          font: smallfont
        },
        new go.Binding("text", "text").makeTwoWay())
      );
    loginDiagram.nodeTemplateMap.add("UndesiredEvent",
      $(go.Node, "Auto",
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        { selectionAdornmentTemplate: UndesiredEventAdornment },
        $(go.Shape, "RoundedRectangle",
          { fill: redgrad, portId: "", toLinkable: true, toEndSegmentLength: 50 }),
        $(go.Panel, "Vertical", {defaultAlignment: go.Spot.TopLeft},
          $(go.TextBlock, "Add", textStyle(),
            { stroke: "whitesmoke",
              minSize: new go.Size(80, NaN) },
            new go.Binding("text", "text").makeTwoWay()),
          $(go.Panel, "Vertical",
            { defaultAlignment: go.Spot.TopLeft,
              itemTemplate: reasonTemplate },
            new go.Binding("itemArray", "reasonsList").makeTwoWay()
          )
        )
        ));
    loginDiagram.nodeTemplateMap.add("Email Validation",
    	      $(go.Node, "Auto",
    	        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
    	        { selectionAdornmentTemplate: UndesiredEventAdornment },
    	        $(go.Shape, "RoundedRectangle",
    	          { fill: redgrad, portId: "", toLinkable: true, toEndSegmentLength: 50 }),
    	        $(go.Panel, "Vertical", {defaultAlignment: go.Spot.TopLeft},
    	          $(go.TextBlock, "Email Validation", textStyle(),
    	            { stroke: "whitesmoke",
    	              minSize: new go.Size(80, NaN) },
    	            new go.Binding("text", "text").makeTwoWay()),
    	          $(go.Panel, "Vertical",
    	            { defaultAlignment: go.Spot.TopLeft,
    	              itemTemplate: reasonTemplate },
    	            new go.Binding("itemArray", "reasonsList").makeTwoWay()
    	          )
    	        )
    	        ));
    loginDiagram.nodeTemplateMap.add("Comment",
      $(go.Node, "Auto",
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        $(go.Shape, "Rectangle",
          { portId: "", fill: whitegrad, fromLinkable: true }),
        $(go.TextBlock, "A comment",
          { margin: 9,
            maxSize: new go.Size(200, NaN),
            wrap: go.TextBlock.WrapFit,
            editable: true,
            font: smallfont },
          new go.Binding("text", "text").makeTwoWay())
        // no ports, because no links are allowed to connect with a comment
        ));
    // clicking the button on an UndesiredEvent node inserts a new text object into the panel
    function addReason(e, obj) {
      var adorn = obj.part;
      if (adorn === null) return;
      e.handled = true;
      var arr = adorn.adornedPart.data.reasonsList;
      loginDiagram.startTransaction("add attribute");
      loginDiagram.model.addArrayItem(arr, {});
      loginDiagram.commitTransaction("add attribute");
    }
    // clicking the button of a default node inserts a new node to the right of the selected node,
    // and adds a link to that new node
    function addNodeAndLink(e, obj) {
      var adorn = obj.part;
      if (adorn === null) return;
      e.handled = true;
      var diagram = adorn.diagram;
      diagram.startTransaction("Add State");
      // get the node data for which the user clicked the button
      var fromNode = adorn.adornedPart;
      var fromData = fromNode.data;
      // create a new "State" data object, positioned off to the right of the adorned Node
      var toData = { text: "new" };
      var p = fromNode.location;
      toData.loc = p.x + 200 + " " + p.y;  // the "loc" property is a string, not a Point object
      // add the new node data to the model
      var model = diagram.model;
      model.addNodeData(toData);
      // create a link data from the old node data to the new node data
      var linkdata = {};
      linkdata[model.linkFromKeyProperty] = model.getKeyForNodeData(fromData);
      linkdata[model.linkToKeyProperty] = model.getKeyForNodeData(toData);
      // and add the link data to the model
      model.addLinkData(linkdata);
      // select the new Node
      var newnode = diagram.findNodeForData(toData);
      diagram.select(newnode);
      diagram.commitTransaction("Add State");
    }
    // replace the default Link template in the linkTemplateMap
    loginDiagram.linkTemplate =
      $(go.Link,  // the whole link panel
        new go.Binding("points").makeTwoWay(),
        { curve: go.Link.Bezier, toShortLength: 15 },
        new go.Binding("curviness", "curviness"),
        $(go.Shape,  // the link shape
          { stroke: "#2F4F4F", strokeWidth: 2.5 }),
        $(go.Shape,  // the arrowhead
          { toArrow: "kite", fill: "#2F4F4F", stroke: null, scale: 2 })
    );
    loginDiagram.linkTemplateMap.add("Comment",
      $(go.Link, { selectable: false },
        $(go.Shape, { strokeWidth: 2, stroke: "darkgreen" })));
    var palette =
      $(go.Palette, "loginPallete",  // create a new Palette in the HTML DIV element "palette"
        {
          // share the template map with the Palette
          nodeTemplateMap: loginDiagram.nodeTemplateMap,
          autoScale: go.Diagram.Uniform  // everything always fits in viewport
        });
    palette.model.nodeDataArray = [
      { category: "Source" },
      { }, // default node
      { category: "DesiredEvent" },
      { category: "UndesiredEvent", reasonsList: [{}] },
      { category: "Comment" },
      { category: "Email Validation"}
    ];
    // read in the JSON-format data from the "mySavedModel" element
    loadLogin(Graphs[0].graphProperties);
    layoutLogin();
  }
  
  // Now init registration 
  
  function initRegister() {
    if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
    var $ = go.GraphObject.make;  // for conciseness in defining templates
    var yellowgrad = $(go.Brush, "Linear", { 0: "rgb(254, 201, 0)", 1: "rgb(254, 162, 0)" });
    var greengrad = $(go.Brush, "Linear", { 0: "#98FB98", 1: "#9ACD32" });
    var bluegrad = $(go.Brush, "Linear", { 0: "#B0E0E6", 1: "#87CEEB" });
    var redgrad = $(go.Brush, "Linear", { 0: "#C45245", 1: "#7D180C" });
    var whitegrad = $(go.Brush, "Linear", { 0: "#F0F8FF", 1: "#E6E6FA" });
    var bigfont = "bold 13pt Helvetica, Arial, sans-serif";
    var smallfont = "bold 11pt Helvetica, Arial, sans-serif";
    // Common text styling
    function textStyle() {
      return {
        margin: 6,
        wrap: go.TextBlock.WrapFit,
        textAlign: "center",
        editable: true,
        font: bigfont
      }
    }
    registerDiagram =
      $(go.Diagram, "registerDiv",
        {
          // have mouse wheel events zoom in and out instead of scroll up ands down
          "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
          allowDrop: true,  // support drag-and-drop from the Palette
          initialAutoScale: go.Diagram.Uniform,
          "linkingTool.direction": go.LinkingTool.ForwardsOnly,
          initialContentAlignment: go.Spot.Center,
          layout: $(go.LayeredDigraphLayout, { isInitial: false, isOngoing: false, layerSpacing: 50 }),
          "undoManager.isEnabled": true
        });
    // when the document is modified, add a "*" to the title and enable the "Save" button
    registerDiagram.addDiagramListener("Modified", function(e) {
      var button = document.getElementById("SaveButton");
      if (button) button.disabled = !registerDiagram.isModified;
      var idx = document.title.indexOf("*");
      if (registerDiagram.isModified) {
        if (idx < 0) document.title += "*";
      } else {
        if (idx >= 0) document.title = document.title.substr(0, idx);
      }
    });
    var defaultAdornment =
      $(go.Adornment, "Spot",
        $(go.Panel, "Auto",
          $(go.Shape, { fill: null, stroke: "dodgerblue", strokeWidth: 4 }),
          $(go.Placeholder)),
        // the button to create a "next" node, at the top-right corner
        $("Button",
          { alignment: go.Spot.TopRight,
            click: addNodeAndLink },  // this function is defined below
          new go.Binding("visible", "", function(a) { return !a.diagram.isReadOnly; }).ofObject(),
          $(go.Shape, "PlusLine", { desiredSize: new go.Size(6, 6) })
        )
      );
    // define the Node template
    registerDiagram.nodeTemplate =
      $(go.Node, "Auto",
        { selectionAdornmentTemplate: defaultAdornment },
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        // define the node's outer shape, which will surround the TextBlock
        $(go.Shape, "Rectangle",
          { fill: yellowgrad, stroke: "black",
            portId: "", fromLinkable: true, toLinkable: true, cursor: "pointer",
            toEndSegmentLength: 50, fromEndSegmentLength: 40 }),
        $(go.TextBlock, "Page",
          { margin: 6,
            font: bigfont,
            editable: true },
          new go.Binding("text", "text").makeTwoWay()));
    registerDiagram.nodeTemplateMap.add("Source",
      $(go.Node, "Auto",
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        $(go.Shape, "RoundedRectangle",
          { fill: bluegrad,
          portId: "", fromLinkable: true, cursor: "pointer", fromEndSegmentLength: 40}),
        $(go.TextBlock, "Source", textStyle(),
          new go.Binding("text", "text").makeTwoWay())
        ));
    registerDiagram.nodeTemplateMap.add("DesiredEvent",
      $(go.Node, "Auto",
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        $(go.Shape, "RoundedRectangle",
          { fill: greengrad, portId: "", toLinkable: true, toEndSegmentLength: 50 }),
        $(go.TextBlock, "Success!", textStyle(),
          new go.Binding("text", "text").makeTwoWay())
        ));
    // Undesired events have a special adornment that allows adding additional "reasons"
    var UndesiredEventAdornment =
      $(go.Adornment, "Spot",
        $(go.Panel, "Auto",
          $(go.Shape, { fill: null, stroke: "dodgerblue", strokeWidth: 4 }),
          $(go.Placeholder)),
        // the button to create a "next" node, at the top-right corner
        $("Button",
          { alignment: go.Spot.BottomRight,
            click: addReason },  // this function is defined below
          new go.Binding("visible", "", function(a) { return !a.diagram.isReadOnly; }).ofObject(),
          $(go.Shape, "TriangleDown", { desiredSize: new go.Size(10, 10) })
        )
      );
    var reasonTemplate = $(go.Panel, "Horizontal",
      $(go.TextBlock, "Attribute",
        {
          margin: new go.Margin(4,0,0,0),
          maxSize: new go.Size(200, NaN),
          wrap: go.TextBlock.WrapFit,
          stroke: "whitesmoke",
          editable: true,
          font: smallfont
        },
        new go.Binding("text", "text").makeTwoWay())
      );
    registerDiagram.nodeTemplateMap.add("UndesiredEvent",
      $(go.Node, "Auto",
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        { selectionAdornmentTemplate: UndesiredEventAdornment },
        $(go.Shape, "RoundedRectangle",
          { fill: redgrad, portId: "", toLinkable: true, toEndSegmentLength: 50 }),
        $(go.Panel, "Vertical", {defaultAlignment: go.Spot.TopLeft},
          $(go.TextBlock, "Add", textStyle(),
            { stroke: "whitesmoke",
              minSize: new go.Size(80, NaN) },
            new go.Binding("text", "text").makeTwoWay()),
          $(go.Panel, "Vertical",
            { defaultAlignment: go.Spot.TopLeft,
              itemTemplate: reasonTemplate },
            new go.Binding("itemArray", "reasonsList").makeTwoWay()
          )
        )
        ));
    registerDiagram.nodeTemplateMap.add("Comment",
      $(go.Node, "Auto",
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        $(go.Shape, "Rectangle",
          { portId: "", fill: whitegrad, fromLinkable: true }),
        $(go.TextBlock, "A comment",
          { margin: 9,
            maxSize: new go.Size(200, NaN),
            wrap: go.TextBlock.WrapFit,
            editable: true,
            font: smallfont },
          new go.Binding("text", "text").makeTwoWay())
        // no ports, because no links are allowed to connect with a comment
        ));
    // clicking the button on an UndesiredEvent node inserts a new text object into the panel
    function addReason(e, obj) {
      var adorn = obj.part;
      if (adorn === null) return;
      e.handled = true;
      var arr = adorn.adornedPart.data.reasonsList;
      registerDiagram.startTransaction("add attribute");
      registerDiagram.model.addArrayItem(arr, {});
      registerDiagram.commitTransaction("add attribute");
    }
    // clicking the button of a default node inserts a new node to the right of the selected node,
    // and adds a link to that new node
    function addNodeAndLink(e, obj) {
      var adorn = obj.part;
      if (adorn === null) return;
      e.handled = true;
      var diagram = adorn.diagram;
      diagram.startTransaction("Add State");
      // get the node data for which the user clicked the button
      var fromNode = adorn.adornedPart;
      var fromData = fromNode.data;
      // create a new "State" data object, positioned off to the right of the adorned Node
      var toData = { text: "new" };
      var p = fromNode.location;
      toData.loc = p.x + 200 + " " + p.y;  // the "loc" property is a string, not a Point object
      // add the new node data to the model
      var model = diagram.model;
      model.addNodeData(toData);
      // create a link data from the old node data to the new node data
      var linkdata = {};
      linkdata[model.linkFromKeyProperty] = model.getKeyForNodeData(fromData);
      linkdata[model.linkToKeyProperty] = model.getKeyForNodeData(toData);
      // and add the link data to the model
      model.addLinkData(linkdata);
      // select the new Node
      var newnode = diagram.findNodeForData(toData);
      diagram.select(newnode);
      diagram.commitTransaction("Add State");
    }
    // replace the default Link template in the linkTemplateMap
    registerDiagram.linkTemplate =
      $(go.Link,  // the whole link panel
        new go.Binding("points").makeTwoWay(),
        { curve: go.Link.Bezier, toShortLength: 15 },
        new go.Binding("curviness", "curviness"),
        $(go.Shape,  // the link shape
          { stroke: "#2F4F4F", strokeWidth: 2.5 }),
        $(go.Shape,  // the arrowhead
          { toArrow: "kite", fill: "#2F4F4F", stroke: null, scale: 2 })
    );
    registerDiagram.linkTemplateMap.add("Comment",
      $(go.Link, { selectable: false },
        $(go.Shape, { strokeWidth: 2, stroke: "darkgreen" })));
    var palette =
      $(go.Palette, "registerPallete",  // create a new Palette in the HTML DIV element "palette"
        {
          // share the template map with the Palette
          nodeTemplateMap: registerDiagram.nodeTemplateMap,
          autoScale: go.Diagram.Uniform  // everything always fits in viewport
        });
    palette.model.nodeDataArray = [
      { category: "Source" },
      { }, // default node
      { category: "DesiredEvent" },
      { category: "UndesiredEvent", reasonsList: [{}] },
      { category: "Comment" }
    ];
    // read in the JSON-format data from the "mySavedModel" element
    loadRegister(Graphs[1].graphProperties);
    layoutRegister();
  }
  
  
  // Now checkout
  
  function initCheckout() {
	    if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
	    var $ = go.GraphObject.make;  // for conciseness in defining templates
	    var yellowgrad = $(go.Brush, "Linear", { 0: "rgb(254, 201, 0)", 1: "rgb(254, 162, 0)" });
	    var greengrad = $(go.Brush, "Linear", { 0: "#98FB98", 1: "#9ACD32" });
	    var bluegrad = $(go.Brush, "Linear", { 0: "#B0E0E6", 1: "#87CEEB" });
	    var redgrad = $(go.Brush, "Linear", { 0: "#C45245", 1: "#7D180C" });
	    var whitegrad = $(go.Brush, "Linear", { 0: "#F0F8FF", 1: "#E6E6FA" });
	    var bigfont = "bold 13pt Helvetica, Arial, sans-serif";
	    var smallfont = "bold 11pt Helvetica, Arial, sans-serif";
	    // Common text styling
	    function textStyle() {
	      return {
	        margin: 6,
	        wrap: go.TextBlock.WrapFit,
	        textAlign: "center",
	        editable: true,
	        font: bigfont
	      }
	    }
	   checkoutDiagram =
	      $(go.Diagram, "checkoutDiv",
	        {
	          // have mouse wheel events zoom in and out instead of scroll up ands down
	          "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
	          allowDrop: true,  // support drag-and-drop from the Palette
	          initialAutoScale: go.Diagram.Uniform,
	          "linkingTool.direction": go.LinkingTool.ForwardsOnly,
	          initialContentAlignment: go.Spot.Center,
	          layout: $(go.LayeredDigraphLayout, { isInitial: false, isOngoing: false, layerSpacing: 50 }),
	          "undoManager.isEnabled": true
	        });
	    // when the document is modified, add a "*" to the title and enable the "Save" button
	   checkoutDiagram.addDiagramListener("Modified", function(e) {
	      var button = document.getElementById("SaveButton");
	      if (button) button.disabled = !checkoutDiagram.isModified;
	      var idx = document.title.indexOf("*");
	      if (checkoutDiagram.isModified) {
	        if (idx < 0) document.title += "*";
	      } else {
	        if (idx >= 0) document.title = document.title.substr(0, idx);
	      }
	    });
	    var defaultAdornment =
	      $(go.Adornment, "Spot",
	        $(go.Panel, "Auto",
	          $(go.Shape, { fill: null, stroke: "dodgerblue", strokeWidth: 4 }),
	          $(go.Placeholder)),
	        // the button to create a "next" node, at the top-right corner
	        $("Button",
	          { alignment: go.Spot.TopRight,
	            click: addNodeAndLink },  // this function is defined below
	          new go.Binding("visible", "", function(a) { return !a.diagram.isReadOnly; }).ofObject(),
	          $(go.Shape, "PlusLine", { desiredSize: new go.Size(6, 6) })
	        )
	      );
	    // define the Node template
	    checkoutDiagram.nodeTemplate =
	      $(go.Node, "Auto",
	        { selectionAdornmentTemplate: defaultAdornment },
	        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
	        // define the node's outer shape, which will surround the TextBlock
	        $(go.Shape, "Rectangle",
	          { fill: yellowgrad, stroke: "black",
	            portId: "", fromLinkable: true, toLinkable: true, cursor: "pointer",
	            toEndSegmentLength: 50, fromEndSegmentLength: 40 }),
	        $(go.TextBlock, "Page",
	          { margin: 6,
	            font: bigfont,
	            editable: true },
	          new go.Binding("text", "text").makeTwoWay()));
	    checkoutDiagram.nodeTemplateMap.add("Source",
	      $(go.Node, "Auto",
	        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
	        $(go.Shape, "RoundedRectangle",
	          { fill: bluegrad,
	          portId: "", fromLinkable: true, cursor: "pointer", fromEndSegmentLength: 40}),
	        $(go.TextBlock, "Source", textStyle(),
	          new go.Binding("text", "text").makeTwoWay())
	        ));
	    checkoutDiagram.nodeTemplateMap.add("DesiredEvent",
	      $(go.Node, "Auto",
	        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
	        $(go.Shape, "RoundedRectangle",
	          { fill: greengrad, portId: "", toLinkable: true, toEndSegmentLength: 50 }),
	        $(go.TextBlock, "Success!", textStyle(),
	          new go.Binding("text", "text").makeTwoWay())
	        ));
	    // Undesired events have a special adornment that allows adding additional "reasons"
	    var UndesiredEventAdornment =
	      $(go.Adornment, "Spot",
	        $(go.Panel, "Auto",
	          $(go.Shape, { fill: null, stroke: "dodgerblue", strokeWidth: 4 }),
	          $(go.Placeholder)),
	        // the button to create a "next" node, at the top-right corner
	        $("Button",
	          { alignment: go.Spot.BottomRight,
	            click: addReason },  // this function is defined below
	          new go.Binding("visible", "", function(a) { return !a.diagram.isReadOnly; }).ofObject(),
	          $(go.Shape, "TriangleDown", { desiredSize: new go.Size(10, 10) })
	        )
	      );
	    var reasonTemplate = $(go.Panel, "Horizontal",
	      $(go.TextBlock, "Attribute",
	        {
	          margin: new go.Margin(4,0,0,0),
	          maxSize: new go.Size(200, NaN),
	          wrap: go.TextBlock.WrapFit,
	          stroke: "whitesmoke",
	          editable: true,
	          font: smallfont
	        },
	        new go.Binding("text", "text").makeTwoWay())
	      );
	    checkoutDiagram.nodeTemplateMap.add("UndesiredEvent",
	      $(go.Node, "Auto",
	        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
	        { selectionAdornmentTemplate: UndesiredEventAdornment },
	        $(go.Shape, "RoundedRectangle",
	          { fill: redgrad, portId: "", toLinkable: true, toEndSegmentLength: 50 }),
	        $(go.Panel, "Vertical", {defaultAlignment: go.Spot.TopLeft},
	          $(go.TextBlock, "Add", textStyle(),
	            { stroke: "whitesmoke",
	              minSize: new go.Size(80, NaN) },
	            new go.Binding("text", "text").makeTwoWay()),
	          $(go.Panel, "Vertical",
	            { defaultAlignment: go.Spot.TopLeft,
	              itemTemplate: reasonTemplate },
	            new go.Binding("itemArray", "reasonsList").makeTwoWay()
	          )
	        )
	        ));
	    checkoutDiagram.nodeTemplateMap.add("Comment",
	      $(go.Node, "Auto",
	        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
	        $(go.Shape, "Rectangle",
	          { portId: "", fill: whitegrad, fromLinkable: true }),
	        $(go.TextBlock, "A comment",
	          { margin: 9,
	            maxSize: new go.Size(200, NaN),
	            wrap: go.TextBlock.WrapFit,
	            editable: true,
	            font: smallfont },
	          new go.Binding("text", "text").makeTwoWay())
	        // no ports, because no links are allowed to connect with a comment
	        ));
	    // clicking the button on an UndesiredEvent node inserts a new text object into the panel
	    function addReason(e, obj) {
	      var adorn = obj.part;
	      if (adorn === null) return;
	      e.handled = true;
	      var arr = adorn.adornedPart.data.reasonsList;
	      checkoutDiagram.startTransaction("add attribute");
	      checkoutDiagram.model.addArrayItem(arr, {});
	      checkoutDiagram.commitTransaction("add attribute");
	    }
	    // clicking the button of a default node inserts a new node to the right of the selected node,
	    // and adds a link to that new node
	    function addNodeAndLink(e, obj) {
	      var adorn = obj.part;
	      if (adorn === null) return;
	      e.handled = true;
	      var diagram = adorn.diagram;
	      diagram.startTransaction("Add State");
	      // get the node data for which the user clicked the button
	      var fromNode = adorn.adornedPart;
	      var fromData = fromNode.data;
	      // create a new "State" data object, positioned off to the right of the adorned Node
	      var toData = { text: "new" };
	      var p = fromNode.location;
	      toData.loc = p.x + 200 + " " + p.y;  // the "loc" property is a string, not a Point object
	      // add the new node data to the model
	      var model = diagram.model;
	      model.addNodeData(toData);
	      // create a link data from the old node data to the new node data
	      var linkdata = {};
	      linkdata[model.linkFromKeyProperty] = model.getKeyForNodeData(fromData);
	      linkdata[model.linkToKeyProperty] = model.getKeyForNodeData(toData);
	      // and add the link data to the model
	      model.addLinkData(linkdata);
	      // select the new Node
	      var newnode = diagram.findNodeForData(toData);
	      diagram.select(newnode);
	      diagram.commitTransaction("Add State");
	    }
	    // replace the default Link template in the linkTemplateMap
	    checkoutDiagram.linkTemplate =
	      $(go.Link,  // the whole link panel
	        new go.Binding("points").makeTwoWay(),
	        { curve: go.Link.Bezier, toShortLength: 15 },
	        new go.Binding("curviness", "curviness"),
	        $(go.Shape,  // the link shape
	          { stroke: "#2F4F4F", strokeWidth: 2.5 }),
	        $(go.Shape,  // the arrowhead
	          { toArrow: "kite", fill: "#2F4F4F", stroke: null, scale: 2 })
	    );
	    checkoutDiagram.linkTemplateMap.add("Comment",
	      $(go.Link, { selectable: false },
	        $(go.Shape, { strokeWidth: 2, stroke: "darkgreen" })));
	    var palette =
	      $(go.Palette, "checkoutPallete",  // create a new Palette in the HTML DIV element "palette"
	        {
	          // share the template map with the Palette
	          nodeTemplateMap: checkoutDiagram.nodeTemplateMap,
	          autoScale: go.Diagram.Uniform  // everything always fits in viewport
	        });
	    palette.model.nodeDataArray = [
	      { category: "Source" },
	      { }, // default node
	      { category: "DesiredEvent" },
	      { category: "UndesiredEvent", reasonsList: [{}] },
	      { category: "Comment" }
	    ];
	    // read in the JSON-format data from the "mySavedModel" element
	    loadCheckout(Graphs[2].graphProperties);
	    layoutCheckout();
	  }
   
  function layoutNewGraph() {
	    newDiagram.layoutDiagram(true);
	  }
  
  function layoutLogin() {
    loginDiagram.layoutDiagram(true);
  }
  function layoutRegister() {
	    registerDiagram.layoutDiagram(true);
	  }
  function layoutCheckout() {
	    checkoutDiagram.layoutDiagram(true);
	  }
  
  // Show the diagram's model in JSON format
  function saveLogin() {
	  Graphs[0].graphProperties = loginDiagram.model.toJson();
    loginDiagram.isModified = false;
  }
  function saveRegister() {
	  Graphs[1].graphProperties = registerDiagram.model.toJson();
	    loginDiagram.isModified = false;
	  }
  function saveCheckout() {
	  Graphs[1].graphProperties = checkoutDiagram.model.toJson();
	  checkoutDiagram.isModified = false;
	  }
  function saveNewGraph(){
	  graphName = $("#newReqGraph").val();
	  var graph = {'graphId':4,"graphName":graphName,"properties":null};
	  graph.properties = newDiagram.model.toJson();
	  console.log(graph.properties);
	  Graphs.push(graph);
  }
  function loadLogin() {
    loginDiagram.model = go.Model.fromJson(Graphs[3].graphProperties);
  }

  function loadRegister() {
    registerDiagram.model = go.Model.fromJson(Graphs[1].graphProperties);
  }
  
  function loadCheckout() {
	  checkoutDiagram.model = go.Model.fromJson(Graphs[2].graphProperties);
	  }
  
  function loadNewGraph() {
	    newDiagram.model = go.Model.fromJson(newGraph);
	  }

  
// Init new graph
  
  function initNewGraph() {
	    // init for these samples -- you don't need to call this
	    var $ = go.GraphObject.make;  // for conciseness in defining templates
	    var yellowgrad = $(go.Brush, "Linear", { 0: "rgb(254, 201, 0)", 1: "rgb(254, 162, 0)" });
	    var greengrad = $(go.Brush, "Linear", { 0: "#98FB98", 1: "#9ACD32" });
	    var bluegrad = $(go.Brush, "Linear", { 0: "#B0E0E6", 1: "#87CEEB" });
	    var redgrad = $(go.Brush, "Linear", { 0: "#C45245", 1: "#7D180C" });
	    var whitegrad = $(go.Brush, "Linear", { 0: "#F0F8FF", 1: "#E6E6FA" });
	    var bigfont = "bold 13pt Helvetica, Arial, sans-serif";
	    var smallfont = "bold 11pt Helvetica, Arial, sans-serif";
	    // Common text styling
	    function textStyle() {
	      return {
	        margin: 6,
	        wrap: go.TextBlock.WrapFit,
	        textAlign: "center",
	        editable: true,
	        font: bigfont
	      }
	    }
	    newDiagram =
	      $(go.Diagram, "newDiv",
	        {
	          // have mouse wheel events zoom in and out instead of scroll up and down
	          "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
	          allowDrop: true,  // support drag-and-drop from the Palette
	          initialAutoScale: go.Diagram.Uniform,
	          "linkingTool.direction": go.LinkingTool.ForwardsOnly,
	          initialContentAlignment: go.Spot.Center,
	          layout: $(go.LayeredDigraphLayout, { isInitial: false, isOngoing: false, layerSpacing: 50 }),
	          "undoManager.isEnabled": true
	        });
	    // when the document is modified, add a "*" to the title and enable the "Save" button
	    newDiagram.addDiagramListener("Modified", function(e) {
	      var button = document.getElementById("SaveNewButton");
	      if (button) button.disabled = !newDiagram.isModified;
	      var idx = document.title.indexOf("*");
	      if (newDiagram.isModified) {
	        if (idx < 0) document.title += "*";
	      } else {
	        if (idx >= 0) document.title = document.title.substr(0, idx);
	      }
	    });
	    var defaultAdornment =
	      $(go.Adornment, "Spot",
	        $(go.Panel, "Auto",
	          $(go.Shape, { fill: null, stroke: "dodgerblue", strokeWidth: 4 }),
	          $(go.Placeholder)),
	        // the button to create a "next" node, at the top-right corner
	        $("Button",
	          { alignment: go.Spot.TopRight,
	            click: addNodeAndLink },  // this function is defined below
	          new go.Binding("visible", "", function(a) { return !a.diagram.isReadOnly; }).ofObject(),
	          $(go.Shape, "PlusLine", { desiredSize: new go.Size(6, 6) })
	        )
	      );
	    // define the Node template
	    newDiagram.nodeTemplate =
	      $(go.Node, "Auto",
	        { selectionAdornmentTemplate: defaultAdornment },
	        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
	        // define the node's outer shape, which will surround the TextBlock
	        $(go.Shape, "Rectangle",
	          { fill: yellowgrad, stroke: "black",
	            portId: "", fromLinkable: true, toLinkable: true, cursor: "pointer",
	            toEndSegmentLength: 50, fromEndSegmentLength: 40 }),
	        $(go.TextBlock, "Step",
	          { margin: 6,
	            font: bigfont,
	            editable: true },
	          new go.Binding("text", "text").makeTwoWay()));
	    newDiagram.nodeTemplateMap.add("Source",
	      $(go.Node, "Auto",
	        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
	        $(go.Shape, "RoundedRectangle",
	          { fill: bluegrad,
	          portId: "", fromLinkable: true, cursor: "pointer", fromEndSegmentLength: 40}),
	        $(go.TextBlock, "Start", textStyle(),
	          new go.Binding("text", "text").makeTwoWay())
	        ));
	    newDiagram.nodeTemplateMap.add("DesiredEvent",
	      $(go.Node, "Auto",
	        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
	        $(go.Shape, "RoundedRectangle",
	          { fill: greengrad, portId: "", toLinkable: true, toEndSegmentLength: 50 }),
	        $(go.TextBlock, "Success!", textStyle(),
	          new go.Binding("text", "text").makeTwoWay())
	        ));
	    // Undesired events have a special adornment that allows adding additional "reasons"
	    var UndesiredEventAdornment =
	      $(go.Adornment, "Spot",
	        $(go.Panel, "Auto",
	          $(go.Shape, { fill: null, stroke: "dodgerblue", strokeWidth: 4 }),
	          $(go.Placeholder)),
	        // the button to create a "next" node, at the top-right corner
	        $("Button",
	          { alignment: go.Spot.BottomRight,
	            click: addReason },  // this function is defined below
	          new go.Binding("visible", "", function(a) { return !a.diagram.isReadOnly; }).ofObject(),
	          $(go.Shape, "TriangleDown", { desiredSize: new go.Size(10, 10) })
	        )
	      );
	    var reasonTemplate = $(go.Panel, "Horizontal",
	      $(go.TextBlock, "Attribute",
	        {
	          margin: new go.Margin(4,0,0,0),
	          maxSize: new go.Size(200, NaN),
	          wrap: go.TextBlock.WrapFit,
	          stroke: "whitesmoke",
	          editable: true,
	          font: smallfont
	        },
	        new go.Binding("text", "text").makeTwoWay())
	      );
	    newDiagram.nodeTemplateMap.add("UndesiredEvent",
	      $(go.Node, "Auto",
	        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
	        { selectionAdornmentTemplate: UndesiredEventAdornment },
	        $(go.Shape, "RoundedRectangle",
	          { fill: redgrad, portId: "", toLinkable: true, toEndSegmentLength: 50 }),
	        $(go.Panel, "Vertical", {defaultAlignment: go.Spot.TopLeft},
	          $(go.TextBlock, "Add", textStyle(),
	            { stroke: "whitesmoke",
	              minSize: new go.Size(80, NaN) },
	            new go.Binding("text", "text").makeTwoWay()),
	          $(go.Panel, "Vertical",
	            { defaultAlignment: go.Spot.TopLeft,
	              itemTemplate: reasonTemplate },
	            new go.Binding("itemArray", "reasonsList").makeTwoWay()
	          )
	        )
	        ));
	    newDiagram.nodeTemplateMap.add("Email Validation",
	    	      $(go.Node, "Auto",
	    	        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
	    	        { selectionAdornmentTemplate: UndesiredEventAdornment },
	    	        $(go.Shape, "RoundedRectangle",
	    	          { fill: redgrad, portId: "", toLinkable: true, toEndSegmentLength: 50 }),
	    	        $(go.Panel, "Vertical", {defaultAlignment: go.Spot.TopLeft},
	    	          $(go.TextBlock, "Email Validation", textStyle(),
	    	            { stroke: "whitesmoke",
	    	              minSize: new go.Size(80, NaN) },
	    	            new go.Binding("text", "text").makeTwoWay()),
	    	          $(go.Panel, "Vertical",
	    	            { defaultAlignment: go.Spot.TopLeft,
	    	              itemTemplate: reasonTemplate },
	    	            new go.Binding("itemArray", "reasonsList").makeTwoWay()
	    	          )
	    	        )
	    	        ));
	    
	    newDiagram.nodeTemplateMap.add("Password Validation",
	    	      $(go.Node, "Auto",
	    	        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
	    	        { selectionAdornmentTemplate: UndesiredEventAdornment },
	    	        $(go.Shape, "RoundedRectangle",
	    	          { fill: redgrad, portId: "", toLinkable: true, toEndSegmentLength: 50 }),
	    	        $(go.Panel, "Vertical", {defaultAlignment: go.Spot.TopLeft},
	    	          $(go.TextBlock, "Password Validation", textStyle(),
	    	            { stroke: "whitesmoke",
	    	              minSize: new go.Size(80, NaN) },
	    	            new go.Binding("text", "text").makeTwoWay()),
	    	          $(go.Panel, "Vertical",
	    	            { defaultAlignment: go.Spot.TopLeft,
	    	              itemTemplate: reasonTemplate },
	    	            new go.Binding("itemArray", "reasonsList").makeTwoWay()
	    	          )
	    	        )
	    	        ));
	    newDiagram.nodeTemplateMap.add("Comment",
	      $(go.Node, "Auto",
	        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
	        $(go.Shape, "Rectangle",
	          { portId: "", fill: whitegrad, fromLinkable: true }),
	        $(go.TextBlock, "A comment",
	          { margin: 9,
	            maxSize: new go.Size(500, NaN),
	            wrap: go.TextBlock.WrapFit,
	            editable: true,
	            font: smallfont },
	          new go.Binding("text", "text").makeTwoWay())
	        // no ports, because no links are allowed to connect with a comment
	        ));
	    // clicking the button on an UndesiredEvent node inserts a new text object into the panel
	    function addReason(e, obj) {
	      var adorn = obj.part;
	      if (adorn === null) return;
	      e.handled = true;
	      var arr = adorn.adornedPart.data.reasonsList;
	      newDiagram.startTransaction("add attribute");
	      newDiagram.model.addArrayItem(arr, {});
	      newDiagram.commitTransaction("add attribute");
	    }
	    // clicking the button of a default node inserts a new node to the right of the selected node,
	    // and adds a link to that new node
	    function addNodeAndLink(e, obj) {
	      var adorn = obj.part;
	      if (adorn === null) return;
	      e.handled = true;
	      var diagram = adorn.diagram;
	      diagram.startTransaction("Add State");
	      // get the node data for which the user clicked the button
	      var fromNode = adorn.adornedPart;
	      var fromData = fromNode.data;
	      // create a new "State" data object, positioned off to the right of the adorned Node
	      var toData = { text: "new" };
	      var p = fromNode.location;
	      toData.loc = p.x + 200 + " " + p.y;  // the "loc" property is a string, not a Point object
	      // add the new node data to the model
	      var model = diagram.model;
	      model.addNodeData(toData);
	      // create a link data from the old node data to the new node data
	      var linkdata = {};
	      linkdata[model.linkFromKeyProperty] = model.getKeyForNodeData(fromData);
	      linkdata[model.linkToKeyProperty] = model.getKeyForNodeData(toData);
	      // and add the link data to the model
	      model.addLinkData(linkdata);
	      // select the new Node
	      var newnode = diagram.findNodeForData(toData);
	      diagram.select(newnode);
	      diagram.commitTransaction("Add State");
	    }
	    // replace the default Link template in the linkTemplateMap
	    newDiagram.linkTemplate =
	      $(go.Link,  // the whole link panel
	        new go.Binding("points").makeTwoWay(),
	        { curve: go.Link.Bezier, toShortLength: 15 },
	        new go.Binding("curviness", "curviness"),
	        $(go.Shape,  // the link shape
	          { stroke: "#2F4F4F", strokeWidth: 2.5 }),
	        $(go.Shape,  // the arrowhead
	          { toArrow: "kite", fill: "#2F4F4F", stroke: null, scale: 2 })
	    );
	    newDiagram.linkTemplateMap.add("Comment",
	      $(go.Link, { selectable: false },
	        $(go.Shape, { strokeWidth: 2, stroke: "darkgreen" })));
	    var palette =
	      $(go.Palette, "newPallete",  // create a new Palette in the HTML DIV element "palette"
	        {
	          // share the template map with the Palette
	          nodeTemplateMap: newDiagram.nodeTemplateMap,
	          autoScale: go.Diagram.Uniform  // everything always fits in viewport
	        });
	    palette.model.nodeDataArray = [
	      { category: "Source" },
	      { }, // default node
	      { category: "DesiredEvent" },
	      { category: "UndesiredEvent", reasonsList: [{}] },
	      { category: "Comment" },
	      { category: "Email Validation"},
	      { category: "Password Validation"},
	      
	    ];
	    // read in the JSON-format data from the "mySavedModel" element
	    loadNewGraph(newGraph);
	    layoutNewGraph();
	  }
	 