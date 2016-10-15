var generateMatrix = function(n) {
  var m = []

  for(var j = 0; j < n; j++) {
    var r = []
    for(var k = 0; k < n; k++) {
      r.push(0)
    }
    m.push(r)
  }

  var p = {x: -1, y: 0}

  var pm = function(i) {
    if((!p.x || m[p.y][p.x - 1]) && (p.y === n - 1 || m[p.y + 1][p.x]) && !m[p.y - 1][p.x]) {
      m[p.y - 1][p.x] = i
      p.y--
    }
    else if(p.x < n - 1 && !m[p.y][p.x + 1]) {
      m[p.y][p.x + 1] = i
      p.x++
    }
    else if(p.y < n - 1 && !m[p.y + 1][p.x]) {
      m[p.y + 1][p.x] = i
      p.y++
    }
    else if(p.x > 0 && !m[p.y][p.x - 1]) {
      m[p.y][p.x - 1] = i
      p.x--
    }
  }

  for(var i = 1; i <= n * n; i++) {
    pm(i)
  }

  return m
}

console.log(generateMatrix(8))
