figma.showUI(__html__);
figma.ui.onmessage = msg => {
  if(msg.type != 0) {
    if(msg.type == 1) {
      for(let i = 0; i < msg.count; i++) {
        const rect = figma.createRectangle();
        rect.x = i*150;
        if(i > 1 ) {
          rect.rotation = 45;
          rect.fills = [{
            type: 'SOLID',
            color: {
              r: 0,
              g: 0,
              b: 0
            }
          }]
        } else{
          rect.rotation = 45;
          rect.fills = [{
            type: 'SOLID',
            color: {
              r: 1,
              g: 1,
              b: 1
            }
          }]
        }
        console.log(rect);
      }
    }else if(msg.type == 2){
      for(let i = 0; i < msg.count; i++) {
        const elli = figma.createEllipse();
        elli.x = i*150;
      }
    }else{
      for(let i = 0; i < msg.count; i++) {
        const poly = figma.createPolygon();
        poly.x = i*150;
      }
    }
    figma.closePlugin();
  }else{
    figma.closePlugin();
  }
}