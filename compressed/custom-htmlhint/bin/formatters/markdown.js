var markdownFormatter=function(o,r){o.on("end",function(o){console.log("# TOC");var n=[],s=[];o.arrAllMessages.forEach(function(o){var a=o.file,e=o.messages,u=0,t=0;e.forEach(function(o){"error"===o.type?u++:t++}),n.push("   - ["+a+"](#"+a+")"),s.push('<a name="'+a+'" />'),s.push("# "+a),s.push(""),s.push("Found "+u+" errors, "+t+" warnings");var c=r.format(e);s.push(""),c.forEach(function(o){s.push("    "+o)}),s.push("")}),console.log(n.join("\r\n")+"\r\n"),console.log(s.join("\r\n"))})};module.exports=markdownFormatter;