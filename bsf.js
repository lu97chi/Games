const data = [
    {   name: "Baja California", conected: [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    {   name: "Baja California Sur", conected: [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    {   name: "Sonora", conected: [0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    {   name: "Chihuahua", conected: [0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    {   name: "Sinaloa", conected: [0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    {   name: "Durango" , conected: [0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    {   name: "Coahuila", conected: [0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1] },
    {   name: "Nayarit", conected: [0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    {   name: "Zacatecas", conected: [0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1] },
    {   name: "Nuevo Leon", conected: [0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1] },
    {   name: "Jalisco", conected: [0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1] },
    {   name: "Colima", conected: [0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    {   name: "Michoacan", conected: [0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0] },
    {   name: "Guerrero", conected: [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0] },
    {   name: "Oaxaca", conected: [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0] },
    {   name: "Chiapas", conected: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0] },
    {   name: "Tabasco", conected: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0] },
    {   name: "Campeche", conected: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0] },
    {   name: "Yucatan", conected: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0] },
    {   name: "Quintana Roo", conected: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    {   name: "Veracruz", conected: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1] },
    {   name: "Puebla", conected: [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0] },
    {   name: "Mexico", conected: [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0] },
    {   name: "Aguas Calientes", conected: [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    {   name: "Guanajuato", conected: [0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1] },
    {   name: "Queretaro", conected: [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1] },
    {   name: "Hidalgo", conected: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1] },
    {   name: "Tlaxcala", conected: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0] },
    {   name: "Plueba", conected: [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0] },
    {   name: "Morelos" , conected: [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0] },
    {   name: "Tamaulipas", conected: [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1] },
    {   name: "San Luis Potosi", conected: [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0] },
    ];
    
    
    function bfs(data, start) {
        let nodesLen = {};
    
        for (let i = 0; i < data.length; i+=1) {
            nodesLen[data[i].name] = Infinity;
        }
    
        nodesLen[data[start].name] = 0;
        let queue = [start];
        let current;
    
        while(queue.length !== 0) {
            current = queue.shift();
            let curConnected = data[current].conected;
            let nIndex = [];
            let idx = curConnected.indexOf(1);
            while(idx !== -1) {
                nIndex.push(idx);
                idx = curConnected.indexOf(1, idx + 1);
            }
    
            for (let j = 0; j < nIndex.length; j++) {
                if (nodesLen[data[nIndex[j]].name] === Infinity) {
                    nodesLen[data[nIndex[j]].name] = nodesLen[data[current].name] + 1;
                    queue.push(nIndex[j]);
                }
            }
        }
        return nodesLen;
    }
    
console.log(bfs(data, 0));