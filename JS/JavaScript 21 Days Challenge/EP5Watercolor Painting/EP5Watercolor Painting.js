(()=>{


    //รับค่ามาจากid
    const canvas = document.getElementById('painting')
    //เชทตความกว่างความยาว vh vw
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    //ดึงค่าgetContextในลักษณะ2dมาใส่ในตัวแปร
    const context = canvas.getContext('2d')

    //เชทจุดเริ่มต้น
    let previousPoint = { x: 0 , y: 0 }

    function getDistance(previousPoint, currentPoint){
        return Math.sqrt((previousPoint.x - currentPoint.x)**2 + (previousPoint.y - currentPoint.y)**2)
    }

    //เรียกทุกครั้งที่มีการเลื่อน
    function onMouseMove({ pageX, pageY }){
        //รับจากตำแหน่งปัจจุบัน
        const currentPoint = { x: pageX, y: pageY }

        context.beginPath()

        //เปลี่ยนstyleของcanvas.getContext
        context.lineCap = 'round'
        context.lineJoin = 'round'

        //ปรับขนาดของเส้น
        const distance = getDistance(previousPoint, currentPoint)
        context.lineWidth = Math.random() / distance * 40

        //ปรับความเข้ม
        const opacity = Math.min(0.5,
            1 / distance)
        context.strokeStyle = `rgba(222, 10, 109, ${opacity})`
        
        //นับจุดเริ่มต้น
        context.moveTo(previousPoint.x, previousPoint.y)
        //ไปจุดปัจจุบัน
        context.lineTo(currentPoint.x, currentPoint.y)
        
        //เริ่มวาดและหยุดทำ
        context.stroke()
        context.closePath()
        
        //เซ็ทให้ค่าอยู่ในจุดเดียวกัน
        previousPoint = currentPoint; 

    }


    //นับตอนเมาส์เข้ามาในcanvas(ปรับจุดpreviousPoint)
    function onMouseEnter({ pageX, pageY }){
        previousPoint.x = pageX; 
        previousPoint.y = pageY; 
    }

    //เรียกใช้function
    function run(){
        canvas.addEventListener('mousemove', onMouseMove)
        canvas.addEventListener('mouseenter', onMouseEnter)
    }

    run()
})()