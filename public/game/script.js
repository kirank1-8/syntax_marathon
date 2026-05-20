/* =========================================================
   SYNTAX MARATHON ULTIMATE PRO
   ========================================================= */

// ---------- SNIPPETS ----------
const SNIPPETS = {
  python: {
    beginner: [`print("hello world")`, `x = 10\nprint(x * 2)`, `for i in range(5):\n    print(i)`],
    intermediate: [`def add(a, b):\n    return a + b`, `nums = [1,2,3,4]\nevens = [n for n in nums if n % 2 == 0]`, `with open("f.txt") as f:\n    data = f.read()`],
    advanced: [`class Stack:\n    def __init__(self):\n        self.items = []\n    def push(self, x):\n        self.items.append(x)`, `def binary_search(arr, t):\n    lo, hi = 0, len(arr) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if arr[mid] == t: return mid\n        elif arr[mid] < t: lo = mid + 1\n        else: hi = mid - 1`],
    expert: [`async def fetch_all(urls):\n    async with aiohttp.ClientSession() as s:\n        return await asyncio.gather(*[s.get(u) for u in urls])`],
    interview: [`def two_sum(nums, target):\n    seen = {}\n    for i, n in enumerate(nums):\n        if target - n in seen:\n            return [seen[target - n], i]\n        seen[n] = i`],
    project: [`@app.route("/api/users/<int:uid>")\ndef get_user(uid):\n    user = db.session.query(User).get(uid)\n    return jsonify(user.to_dict())`]
  },
  javascript: {
    beginner: [`console.log("hello world");`, `let x = 5;\nconsole.log(x);`, `const arr = [1,2,3];`],
    intermediate: [`const add = (a, b) => a + b;`, `const sum = arr.reduce((a, b) => a + b, 0);`, `[1,2,3].forEach(n => console.log(n));`],
    advanced: [`class User {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    return \`Hi \${this.name}\`;\n  }\n}`, `const debounce = (fn, ms) => {\n  let t;\n  return (...args) => {\n    clearTimeout(t);\n    t = setTimeout(() => fn(...args), ms);\n  };\n};`],
    expert: [`function* fibonacci() {\n  let [a, b] = [0, 1];\n  while (true) {\n    yield a;\n    [a, b] = [b, a + b];\n  }\n}`],
    interview: [`function maxSubArray(nums) {\n  let max = nums[0], cur = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    cur = Math.max(nums[i], cur + nums[i]);\n    max = Math.max(max, cur);\n  }\n  return max;\n}`],
    project: [`app.post("/api/login", async (req, res) => {\n  const { email, password } = req.body;\n  const user = await User.findOne({ email });\n  if (!user) return res.status(401).json({ error: "invalid" });\n  res.json({ token: signJwt(user) });\n});`]
  },
  typescript: {
    beginner: [`const name: string = "Lovable";`, `let age: number = 25;`],
    intermediate: [`interface User {\n  id: number;\n  name: string;\n}\nconst u: User = { id: 1, name: "Ada" };`],
    advanced: [`type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };`],
    expert: [`function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {\n  return keys.reduce((acc, k) => ({ ...acc, [k]: obj[k] }), {} as Pick<T, K>);\n}`],
    interview: [`function isValid(s: string): boolean {\n  const stack: string[] = [];\n  const map: Record<string, string> = { ")": "(", "]": "[", "}": "{" };\n  for (const c of s) {\n    if (c in map) {\n      if (stack.pop() !== map[c]) return false;\n    } else stack.push(c);\n  }\n  return stack.length === 0;\n}`],
    project: [`export const useAuth = (): AuthContext => {\n  const ctx = useContext(Ctx);\n  if (!ctx) throw new Error("AuthProvider missing");\n  return ctx;\n};`]
  },
  java: {
    beginner: [`System.out.println("Hello World");`],
    intermediate: [`public static int add(int a, int b) {\n    return a + b;\n}`],
    advanced: [`public class Stack<T> {\n    private LinkedList<T> list = new LinkedList<>();\n    public void push(T x) { list.addFirst(x); }\n    public T pop() { return list.removeFirst(); }\n}`],
    expert: [`@FunctionalInterface\ninterface Mapper<T, R> {\n    R apply(T input);\n}`],
    interview: [`public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        if (map.containsKey(target - nums[i])) return new int[]{map.get(target - nums[i]), i};\n        map.put(nums[i], i);\n    }\n    return new int[0];\n}`],
    project: [`@RestController\n@RequestMapping("/api/users")\npublic class UserController {\n    @GetMapping("/{id}")\n    public User get(@PathVariable Long id) { return service.findById(id); }\n}`]
  },
  c: {
    beginner: [`printf("Hello World");`],
    intermediate: [`for (int i = 0; i < 5; i++) {\n    printf("%d\n", i);\n}`],
    advanced: [`struct Node {\n    int data;\n    struct Node* next;\n};`],
    expert: [`void* safe_malloc(size_t n) {\n    void* p = malloc(n);\n    if (!p) exit(EXIT_FAILURE);\n    return p;\n}`],
    interview: [`int binary_search(int* arr, int n, int t) {\n    int lo = 0, hi = n - 1;\n    while (lo <= hi) {\n        int mid = (lo + hi) / 2;\n        if (arr[mid] == t) return mid;\n        if (arr[mid] < t) lo = mid + 1;\n        else hi = mid - 1;\n    }\n    return -1;\n}`],
    project: [`int main(int argc, char** argv) {\n    if (argc < 2) {\n        fprintf(stderr, "usage: %s <file>\n", argv[0]);\n        return 1;\n    }\n    return 0;\n}`]
  },
  cpp: {
    beginner: [`cout << "Hello World";`],
    intermediate: [`vector<int> nums = {1, 2, 3};`, `for (auto& n : nums) cout << n;`],
    advanced: [`template<typename T>\nclass Node {\npublic:\n    T data;\n    Node* next;\n};`],
    expert: [`template<class It>\nauto sum(It b, It e) -> typename std::iterator_traits<It>::value_type {\n    return std::accumulate(b, e, 0);\n}`],
    interview: [`int maxProfit(vector<int>& prices) {\n    int minP = INT_MAX, profit = 0;\n    for (int p : prices) {\n        minP = min(minP, p);\n        profit = max(profit, p - minP);\n    }\n    return profit;\n}`],
    project: [`class HttpServer {\npublic:\n    void route(const string& path, function<void(Request&)> h);\n    void listen(int port);\n};`]
  },
  csharp: {
    beginner: [`Console.WriteLine("Hello World");`],
    intermediate: [`public int Add(int a, int b) {\n    return a + b;\n}`],
    advanced: [`public class Repo<T> where T : class {\n    public T? Find(int id) => _db.Set<T>().Find(id);\n}`],
    expert: [`public async Task<T> RetryAsync<T>(Func<Task<T>> op, int max = 3) {\n    for (int i = 0; i < max; i++) {\n        try { return await op(); }\n        catch when (i < max - 1) { await Task.Delay(1000); }\n    }\n    throw new Exception("retry failed");\n}`],
    interview: [`public int LengthOfLongest(string s) {\n    var set = new HashSet<char>();\n    int lo = 0, max = 0;\n    for (int hi = 0; hi < s.Length; hi++) {\n        while (set.Contains(s[hi])) set.Remove(s[lo++]);\n        set.Add(s[hi]);\n        max = Math.Max(max, hi - lo + 1);\n    }\n    return max;\n}`],
    project: [`[ApiController]\n[Route("api/[controller]")]\npublic class UsersController : ControllerBase {\n    [HttpGet("{id}")]\n    public IActionResult Get(int id) => Ok(_svc.Find(id));\n}`]
  },
  go: {
    beginner: [`fmt.Println("Hello World")`],
    intermediate: [`func add(a, b int) int {\n    return a + b\n}`],
    advanced: [`type Stack struct {\n    items []int\n}\nfunc (s *Stack) Push(x int) { s.items = append(s.items, x) }`],
    expert: [`func worker(jobs <-chan int, results chan<- int) {\n    for j := range jobs {\n        results <- j * 2\n    }\n}`],
    interview: [`func twoSum(nums []int, target int) []int {\n    m := map[int]int{}\n    for i, n := range nums {\n        if j, ok := m[target-n]; ok {\n            return []int{j, i}\n        }\n        m[n] = i\n    }\n    return nil\n}`],
    project: [`func main() {\n    http.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {\n        w.Write([]byte("ok"))\n    })\n    log.Fatal(http.ListenAndServe(":8080", nil))\n}`]
  },
  rust: {
    beginner: [`println!("Hello World");`],
    intermediate: [`fn add(a: i32, b: i32) -> i32 {\n    a + b\n}`],
    advanced: [`struct Stack<T> {\n    items: Vec<T>,\n}\nimpl<T> Stack<T> {\n    fn push(&mut self, x: T) { self.items.push(x); }\n}`],
    expert: [`async fn fetch_json<T: DeserializeOwned>(url: &str) -> Result<T, reqwest::Error> {\n    reqwest::get(url).await?.json::<T>().await\n}`],
    interview: [`fn is_palindrome(s: &str) -> bool {\n    let chars: Vec<char> = s.chars().collect();\n    let (mut i, mut j) = (0, chars.len() - 1);\n    while i < j {\n        if chars[i] != chars[j] { return false; }\n        i += 1; j -= 1;\n    }\n    true\n}`],
    project: [`#[tokio::main]\nasync fn main() -> Result<(), Box<dyn Error>> {\n    let app = Router::new().route("/", get(|| async { "Hello" }));\n    axum::Server::bind(&"0.0.0.0:3000".parse()?).serve(app.into_make_service()).await?;\n    Ok(())\n}`]
  },
  swift: {
    beginner: [`print("Hello World")`],
    intermediate: [`func add(_ a: Int, _ b: Int) -> Int {\n    return a + b\n}`],
    advanced: [`struct Stack<T> {\n    private var items: [T] = []\n    mutating func push(_ x: T) { items.append(x) }\n}`],
    expert: [`func fetch<T: Decodable>(_ url: URL) async throws -> T {\n    let (data, _) = try await URLSession.shared.data(from: url)\n    return try JSONDecoder().decode(T.self, from: data)\n}`],
    interview: [`func reverseList(_ head: ListNode?) -> ListNode? {\n    var prev: ListNode? = nil\n    var cur = head\n    while cur != nil {\n        let next = cur?.next\n        cur?.next = prev\n        prev = cur\n        cur = next\n    }\n    return prev\n}`],
    project: [`struct ContentView: View {\n    var body: some View {\n        Text("Hello SwiftUI")\n            .padding()\n    }\n}`]
  },
  kotlin: {
    beginner: [`println("Hello World")`],
    intermediate: [`fun add(a: Int, b: Int): Int = a + b`],
    advanced: [`class Stack<T> {\n    private val items = mutableListOf<T>()\n    fun push(x: T) { items.add(x) }\n}`],
    expert: [`suspend fun fetchUser(id: Int): User = withContext(Dispatchers.IO) {\n    api.getUser(id)\n}`],
    interview: [`fun twoSum(nums: IntArray, target: Int): IntArray {\n    val map = mutableMapOf<Int, Int>()\n    for ((i, n) in nums.withIndex()) {\n        map[target - n]?.let { return intArrayOf(it, i) }\n        map[n] = i\n    }\n    return intArrayOf()\n}`],
    project: [`@Composable\nfun Greeting(name: String) {\n    Text(text = "Hello, $name!")\n}`]
  },
  php: {
    beginner: [`echo "Hello World";`],
    intermediate: [`function add($a, $b) {\n    return $a + $b;\n}`],
    advanced: [`class User {\n    public function __construct(private string $name) {}\n    public function greet(): string {\n        return "Hi " . $this->name;\n    }\n}`],
    expert: [`function pipe(...$fns) {\n    return fn($x) => array_reduce($fns, fn($acc, $fn) => $fn($acc), $x);\n}`],
    interview: [`function isAnagram($a, $b) {\n    $ca = count_chars($a, 1);\n    $cb = count_chars($b, 1);\n    return $ca === $cb;\n}`],
    project: [`Route::get('/api/users/{id}', function ($id) {\n    return User::findOrFail($id);\n});`]
  },
  ruby: {
    beginner: [`puts "Hello World"`],
    intermediate: [`def add(a, b)\n  a + b\nend`],
    advanced: [`class Stack\n  def initialize\n    @items = []\n  end\n  def push(x)\n    @items.push(x)\n  end\nend`],
    expert: [`module Cacheable\n  def cache(key, &block)\n    @cache ||= {}\n    @cache[key] ||= block.call\n  end\nend`],
    interview: [`def two_sum(nums, target)\n  seen = {}\n  nums.each_with_index do |n, i|\n    return [seen[target - n], i] if seen[target - n]\n    seen[n] = i\n  end\nend`],
    project: [`class UsersController < ApplicationController\n  def show\n    @user = User.find(params[:id])\n    render json: @user\n  end\nend`]
  },
  bash: {
    beginner: [`echo "Hello World"`],
    intermediate: [`for i in {1..5}; do\n  echo "iter $i"\ndone`],
    advanced: [`if [ -f "config.yml" ]; then\n  source config.yml\nelse\n  echo "missing config" >&2\n  exit 1\nfi`],
    expert: [`#!/bin/bash\nset -euo pipefail\ntrap 'echo "error on line $LINENO"' ERR\nfor f in *.log; do\n  gzip -k "$f"\ndone`],
    interview: [`while IFS=, read -r name score; do\n  echo "$name: $score"\ndone < scores.csv`],
    project: [`docker run -d --name api -p 8080:8080 -e DB_URL="$DB_URL" myapp:latest`]
  },
  sql: {
    beginner: [`SELECT * FROM users;`],
    intermediate: [`SELECT name, COUNT(*) FROM orders GROUP BY name;`],
    advanced: [`SELECT u.name, SUM(o.total) AS revenue\nFROM users u\nJOIN orders o ON o.user_id = u.id\nGROUP BY u.name\nHAVING SUM(o.total) > 1000;`],
    expert: [`WITH ranked AS (\n  SELECT id, score, ROW_NUMBER() OVER (PARTITION BY game ORDER BY score DESC) AS rn\n  FROM scores\n)\nSELECT * FROM ranked WHERE rn <= 3;`],
    interview: [`SELECT DepartmentId, Name, Salary FROM (\n  SELECT *, DENSE_RANK() OVER (PARTITION BY DepartmentId ORDER BY Salary DESC) AS r\n  FROM Employee\n) t WHERE r <= 3;`],
    project: [`CREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  email VARCHAR(255) UNIQUE NOT NULL,\n  created_at TIMESTAMP DEFAULT NOW()\n);`]
  },
  html: {
    beginner: [`<h1>Hello World</h1>`],
    intermediate: [`<form action="/submit" method="POST">\n  <input name="email" type="email" required>\n  <button type="submit">Send</button>\n</form>`],
    advanced: [`<article class="card">\n  <header><h2>Title</h2></header>\n  <p>Body content</p>\n</article>`],
    expert: [`<dialog id="modal" aria-labelledby="title">\n  <h2 id="title">Confirm</h2>\n  <button autofocus>OK</button>\n</dialog>`],
    interview: [`<table>\n  <thead><tr><th>Name</th><th>Score</th></tr></thead>\n  <tbody>\n    <tr><td>Ada</td><td>99</td></tr>\n  </tbody>\n</table>`],
    project: [`<meta property="og:title" content="My App">\n<meta property="og:image" content="/og.png">\n<link rel="canonical" href="https://example.com">`]
  },
  css: {
    beginner: [`body { margin: 0; }`],
    intermediate: [`.card {\n  padding: 16px;\n  border-radius: 8px;\n  background: #fff;\n}`],
    advanced: [`.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}`],
    expert: [`@keyframes shimmer {\n  0% { background-position: -200% 0; }\n  100% { background-position: 200% 0; }\n}`],
    interview: [`.btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n}`],
    project: [`:root {\n  --primary: #6366f1;\n  --bg: #0a0d14;\n  --radius: 12px;\n}`]
  },
  react: {
    beginner: [`const App = () => <h1>Hello</h1>;`],
    intermediate: [`const [count, setCount] = useState(0);\nreturn <button onClick={() => setCount(c => c + 1)}>{count}</button>;`],
    advanced: [`function Counter() {\n  const [n, setN] = useState(0);\n  useEffect(() => {\n    document.title = \`Count: \${n}\`;\n  }, [n]);\n  return <button onClick={() => setN(n + 1)}>{n}</button>;\n}`],
    expert: [`const useDebounced = (value, ms = 300) => {\n  const [v, setV] = useState(value);\n  useEffect(() => {\n    const t = setTimeout(() => setV(value), ms);\n    return () => clearTimeout(t);\n  }, [value, ms]);\n  return v;\n};`],
    interview: [`function TodoList({ todos, onToggle }) {\n  return (\n    <ul>\n      {todos.map(t => (\n        <li key={t.id} onClick={() => onToggle(t.id)}>{t.text}</li>\n      ))}\n    </ul>\n  );\n}`],
    project: [`export default function Layout({ children }) {\n  return (\n    <div className="min-h-screen bg-background">\n      <Header />\n      <main>{children}</main>\n      <Footer />\n    </div>\n  );\n}`]
  },
  node: {
    beginner: [`console.log(process.version);`],
    intermediate: [`const fs = require("fs");\nconst data = fs.readFileSync("file.txt", "utf8");`],
    advanced: [`const http = require("http");\nhttp.createServer((req, res) => {\n  res.end("ok");\n}).listen(3000);`],
    expert: [`const stream = fs.createReadStream("big.log");\nstream.pipe(zlib.createGzip()).pipe(fs.createWriteStream("big.log.gz"));`],
    interview: [`async function readAll(files) {\n  return Promise.all(files.map(f => fs.promises.readFile(f, "utf8")));\n}`],
    project: [`const express = require("express");\nconst app = express();\napp.use(express.json());\napp.get("/api/health", (_, res) => res.json({ ok: true }));\napp.listen(3000);`]
  },
  mongo: {
    beginner: [`db.users.find();`],
    intermediate: [`db.users.find({ age: { $gte: 18 } });`],
    advanced: [`db.orders.aggregate([\n  { $match: { status: "paid" } },\n  { $group: { _id: "$userId", total: { $sum: "$amount" } } }\n]);`],
    expert: [`db.events.createIndex({ userId: 1, createdAt: -1 }, { background: true });`],
    interview: [`db.users.aggregate([\n  { $lookup: { from: "orders", localField: "_id", foreignField: "userId", as: "orders" } },\n  { $project: { name: 1, orderCount: { $size: "$orders" } } }\n]);`],
    project: [`db.users.updateOne(\n  { _id: ObjectId("...") },\n  { $set: { lastLogin: new Date() }, $inc: { loginCount: 1 } }\n);`]
  },
  leetcode: {
    beginner: [`def reverse_string(s):\n    return s[::-1]`],
    intermediate: [`def is_valid_parentheses(s):\n    stack = []\n    pairs = {")": "(", "]": "[", "}": "{"}\n    for c in s:\n        if c in pairs:\n            if not stack or stack.pop() != pairs[c]: return False\n        else: stack.append(c)\n    return not stack`],
    advanced: [`def merge_intervals(intervals):\n    intervals.sort(key=lambda x: x[0])\n    merged = []\n    for i in intervals:\n        if merged and i[0] <= merged[-1][1]:\n            merged[-1][1] = max(merged[-1][1], i[1])\n        else:\n            merged.append(i)\n    return merged`],
    expert: [`def trap(height):\n    l, r = 0, len(height) - 1\n    lm, rm, water = 0, 0, 0\n    while l < r:\n        if height[l] < height[r]:\n            lm = max(lm, height[l])\n            water += lm - height[l]\n            l += 1\n        else:\n            rm = max(rm, height[r])\n            water += rm - height[r]\n            r -= 1\n    return water`],
    interview: [`def length_of_longest_substring(s):\n    seen = {}\n    start = 0\n    longest = 0\n    for i, c in enumerate(s):\n        if c in seen and seen[c] >= start:\n            start = seen[c] + 1\n        seen[c] = i\n        longest = max(longest, i - start + 1)\n    return longest`],
    project: [`def dijkstra(graph, start):\n    import heapq\n    distances = {n: float("inf") for n in graph}\n    distances[start] = 0\n    pq = [(0, start)]\n    while pq:\n        d, node = heapq.heappop(pq)\n        for neighbor, weight in graph[node].items():\n            new_d = d + weight\n            if new_d < distances[neighbor]:\n                distances[neighbor] = new_d\n                heapq.heappush(pq, (new_d, neighbor))\n    return distances`]
  },
  ds: {
    beginner: [`class Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None`],
    intermediate: [`class Queue:\n    def __init__(self):\n        self.items = []\n    def enqueue(self, x):\n        self.items.append(x)\n    def dequeue(self):\n        return self.items.pop(0)`],
    advanced: [`class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.end = False`],
    expert: [`class LRUCache:\n    def __init__(self, capacity):\n        self.cap = capacity\n        self.cache = OrderedDict()\n    def get(self, key):\n        if key not in self.cache: return -1\n        self.cache.move_to_end(key)\n        return self.cache[key]`],
    interview: [`class MinHeap:\n    def __init__(self):\n        self.heap = []\n    def push(self, val):\n        self.heap.append(val)\n        self._sift_up(len(self.heap) - 1)`],
    project: [`class GraphAdjList:\n    def __init__(self):\n        self.adj = defaultdict(list)\n    def add_edge(self, u, v, w=1):\n        self.adj[u].append((v, w))`]
  },
  algo: {
    beginner: [`def linear_search(arr, t):\n    for i, x in enumerate(arr):\n        if x == t: return i\n    return -1`],
    intermediate: [`def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr`],
    advanced: [`def quicksort(arr):\n    if len(arr) <= 1: return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    mid = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + mid + quicksort(right)`],
    expert: [`def kmp_search(text, pattern):\n    lps = [0] * len(pattern)\n    j = 0\n    for i in range(1, len(pattern)):\n        while j > 0 and pattern[i] != pattern[j]:\n            j = lps[j - 1]\n        if pattern[i] == pattern[j]: j += 1\n        lps[i] = j\n    return lps`],
    interview: [`def dfs(graph, start, visited=None):\n    if visited is None: visited = set()\n    visited.add(start)\n    for n in graph[start]:\n        if n not in visited:\n            dfs(graph, n, visited)\n    return visited`],
    project: [`def a_star(start, goal, h, neighbors):\n    open_set = [(0, start)]\n    came_from = {}\n    g = {start: 0}\n    while open_set:\n        _, current = heapq.heappop(open_set)\n        if current == goal: return reconstruct(came_from, current)\n        for n in neighbors(current):\n            tentative = g[current] + 1\n            if tentative < g.get(n, float("inf")):\n                came_from[n] = current\n                g[n] = tentative\n                heapq.heappush(open_set, (tentative + h(n), n))`]
  },
  linux: {
    beginner: [`ls -la`, `cd /var/log`, `pwd`],
    intermediate: [`grep -r "TODO" ./src`, `find . -name "*.log" -mtime -7`],
    advanced: [`tar -czf backup.tar.gz /home/user --exclude="*.tmp"`],
    expert: [`awk -F',' '{ sum += $3 } END { print sum / NR }' data.csv`],
    interview: [`ps aux | grep node | awk '{print $2}' | xargs kill -9`],
    project: [`rsync -avz --delete --exclude=node_modules ./ user@server:/var/www/app/`]
  }
};

const LANG_LABELS = {
  python:"Python",javascript:"JavaScript",typescript:"TypeScript",java:"Java",
  c:"C",cpp:"C++",csharp:"C#",go:"Go",rust:"Rust",swift:"Swift",kotlin:"Kotlin",
  php:"PHP",ruby:"Ruby",bash:"Bash",sql:"SQL",html:"HTML",css:"CSS",
  react:"React JSX",node:"Node.js",mongo:"MongoDB",leetcode:"LeetCode",
  ds:"Data Structures",algo:"Algorithms",linux:"Linux Commands"
};
const LANG_EXT = {python:"py",javascript:"js",typescript:"ts",java:"java",c:"c",cpp:"cpp",
  csharp:"cs",go:"go",rust:"rs",swift:"swift",kotlin:"kt",php:"php",ruby:"rb",bash:"sh",
  sql:"sql",html:"html",css:"css",react:"jsx",node:"js",mongo:"js",leetcode:"py",ds:"py",algo:"py",linux:"sh"};

const DIFF_CFG = {
  beginner:    { time:90, mult:1.0, snippetPool:["beginner","intermediate"] },
  intermediate:{ time:60, mult:1.5, snippetPool:["intermediate","advanced"] },
  advanced:    { time:45, mult:2.0, snippetPool:["advanced","interview"] },
  expert:      { time:35, mult:3.0, snippetPool:["expert","interview","project"] },
  legendary:   { time:25, mult:5.0, snippetPool:["expert","project","interview"] }
};

const POWERUPS = [
  {id:"freeze",  name:"Freeze Timer",  desc:"Stop timer 5s",      cd:30, dur:5000},
  {id:"double",  name:"Double Score",  desc:"x2 for 10s",          cd:35, dur:10000},
  {id:"correct", name:"Auto Correct",  desc:"Fix last error",      cd:25, dur:0},
  {id:"shield",  name:"Error Shield",  desc:"Block 3 errors",      cd:40, dur:0},
  {id:"slow",    name:"Slow Motion",   desc:"Time x0.5 (8s)",      cd:30, dur:8000},
  {id:"skip",    name:"Instant Skip",  desc:"Next snippet",        cd:20, dur:0},
  {id:"acc",     name:"Accuracy Boost",desc:"+5% accuracy",        cd:45, dur:0},
  {id:"combo",   name:"Combo Saver",   desc:"Keep combo on error", cd:35, dur:15000},
  {id:"time",    name:"Time Multiplier",desc:"+10 seconds",        cd:60, dur:0},
  {id:"bonus",   name:"Bonus Snippet", desc:"+200 points",         cd:50, dur:0}
];

const ACHIEVEMENTS = [
  {id:"wpm100",  name:"Century",         desc:"Reach 100 WPM"},
  {id:"perfect", name:"Perfect Accuracy",desc:"100% accuracy round"},
  {id:"combo50", name:"50 Combo Streak", desc:"Hit a 50 combo"},
  {id:"noMiss",  name:"Flawless",        desc:"No mistake round"},
  {id:"marathon",name:"Marathon",        desc:"Complete a 5-min run"},
  {id:"poly",    name:"Polyglot",        desc:"Play 5 languages"},
  {id:"demon",   name:"Speed Demon",     desc:"Reach 130 WPM"},
  {id:"master",  name:"Syntax Master",   desc:"10 perfect rounds"},
  {id:"daily7",  name:"Week Warrior",    desc:"7-day streak"},
  {id:"score10k",name:"Highscore",       desc:"Score 10,000+"}
];

const KEYWORDS = {
  generic: ["function","const","let","var","return","if","else","for","while","class","new","import","export","from","async","await","public","private","static","void","int","string","bool","true","false","null","undefined","def","print","self","def","end","fn","pub","struct","trait","impl","use","mod","interface","type","extends","implements","try","catch","throw","this","super","case","switch","break","continue","in","of","not","and","or","is"]
};

// ---------- STATE ----------
const state = {
  running:false, paused:false,
  text:"", typed:"", errors:0, correct:0, total:0, backspaces:0,
  timeLimit:60, timeLeft:60, startTime:0, lastTick:0,
  combo:0, maxCombo:0, score:0, multiplier:1,
  wpmHistory:[], accHistory:[], consHistory:[], keyTimes:{}, lastKeyTime:0,
  keyErrors:{}, snippets:0, perfectSnippets:0,
  cdTimers:{}, activeEffects:{ freeze:0, double:0, slow:0, comboSaver:0, shield:0 },
  racers:[], raceTimer:null, mainTimer:null
};

const store = {
  get:(k,d)=>{ try { return JSON.parse(localStorage.getItem("sm_"+k)) ?? d; } catch { return d; } },
  set:(k,v)=>localStorage.setItem("sm_"+k,JSON.stringify(v))
};

// ---------- DOM ----------
const $ = id => document.getElementById(id);
const els = {};
["timer","wpm","rawWpm","accuracy","errors","score","multiplier","combo","maxCombo","consistency",
 "language","difficulty","mode","duration","startBtn","resetBtn","activeModes","tabName","tabIcon",
 "ideLang","ideDiff","lineNumbers","codeDisplay","codeInput","terminalBody","powerups","race",
 "timerBar","themeSelect","soundToggle","dailyStreak","achievementsGrid","leaderboardBody",
 "aiAnalysis","resultsModal","closeModal","resWpm","resAcc","resScore","resCombo","resCons","resRank",
 "resAnalysis","resUnlocks","globalSearch","resetData",
 "setFont","setFontSize","setCursor","setEditor","setBg","setKbSound","setAccent","setLayout"
].forEach(id => els[id] = $(id));

// ---------- INIT LANGUAGE SELECT ----------
function initLanguageSelect() {
  els.language.innerHTML = Object.keys(LANG_LABELS)
    .map(k => `<option value="${k}">${LANG_LABELS[k]}</option>`).join("");
}

// ---------- NAVIGATION ----------
document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    btn.classList.add("active");
    $("view-"+btn.dataset.view).classList.add("active");
    if (btn.dataset.view === "analytics") renderCharts();
    if (btn.dataset.view === "leaderboard") renderLeaderboard("all");
    if (btn.dataset.view === "achievements") renderAchievements();
  });
});

// ---------- THEME ----------
els.themeSelect.addEventListener("change", e => {
  document.body.dataset.theme = e.target.value;
  store.set("theme", e.target.value);
});
els.themeSelect.value = store.get("theme","dark");
document.body.dataset.theme = els.themeSelect.value;

// ---------- SETTINGS ----------
function applySettings() {
  const s = store.get("settings", {
    font:"JetBrains Mono", fontSize:15, cursor:"line", editor:"vscode",
    bg:"particles", kbSound:"typewriter", accent:"#6366f1", layout:"QWERTY"
  });
  els.setFont.value = s.font;
  els.setFontSize.value = s.fontSize;
  els.setCursor.value = s.cursor;
  els.setEditor.value = s.editor;
  els.setBg.value = s.bg;
  els.setKbSound.value = s.kbSound;
  els.setAccent.value = s.accent;
  els.setLayout.value = s.layout;
  document.querySelectorAll(".code-display, #codeInput").forEach(el => {
    el.style.fontFamily = `'${s.font}', monospace`;
    el.style.fontSize = s.fontSize + "px";
  });
  document.documentElement.style.setProperty("--accent", s.accent);
  if (s.bg === "none") { document.querySelector(".bg-grid").style.display="none"; $("particles").style.display="none"; }
  else if (s.bg === "grid") { document.querySelector(".bg-grid").style.display="block"; $("particles").style.display="none"; }
  else { document.querySelector(".bg-grid").style.display="block"; $("particles").style.display="block"; }
}
function saveSettings() {
  store.set("settings", {
    font: els.setFont.value, fontSize: +els.setFontSize.value, cursor: els.setCursor.value,
    editor: els.setEditor.value, bg: els.setBg.value, kbSound: els.setKbSound.value,
    accent: els.setAccent.value, layout: els.setLayout.value
  });
  applySettings();
}
["setFont","setFontSize","setCursor","setEditor","setBg","setKbSound","setAccent","setLayout"].forEach(id => {
  els[id].addEventListener("change", saveSettings);
});
els.resetData.addEventListener("click", () => {
  if (confirm("Reset all stats, leaderboard, and settings?")) {
    Object.keys(localStorage).filter(k => k.startsWith("sm_")).forEach(k => localStorage.removeItem(k));
    location.reload();
  }
});

// ---------- SOUND ----------
let soundOn = store.get("soundOn", true);
els.soundToggle.textContent = "Sound: " + (soundOn ? "On" : "Off");
els.soundToggle.addEventListener("click", () => {
  soundOn = !soundOn;
  store.set("soundOn", soundOn);
  els.soundToggle.textContent = "Sound: " + (soundOn ? "On" : "Off");
});
let audioCtx;
function beep(freq=440, dur=40, type="square", vol=0.04) {
  if (!soundOn) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext||window.webkitAudioContext)();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.value = vol;
    o.connect(g); g.connect(audioCtx.destination);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur/1000);
    o.stop(audioCtx.currentTime + dur/1000);
  } catch {}
}

// ---------- PARTICLES ----------
(function particles(){
  const canvas = $("particles");
  const ctx = canvas.getContext("2d");
  let w, h, parts;
  function resize() { w = canvas.width = innerWidth; h = canvas.height = innerHeight; }
  resize(); addEventListener("resize", resize);
  parts = Array.from({length:40}, () => ({
    x: Math.random()*w, y: Math.random()*h,
    vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3,
    r: Math.random()*1.5+0.5
  }));
  function tick() {
    ctx.clearRect(0,0,w,h);
    const accent = getComputedStyle(document.body).getPropertyValue("--accent").trim() || "#6366f1";
    parts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x<0||p.x>w) p.vx*=-1;
      if (p.y<0||p.y>h) p.vy*=-1;
      ctx.fillStyle = accent + "55";
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
    });
    requestAnimationFrame(tick);
  }
  tick();
})();

// ---------- SYNTAX HIGHLIGHT (for rendering) ----------
function escapeHtml(s){ return s.replace(/[&<>]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;"})[c]); }
function tokenize(text, lang) {
  let html = escapeHtml(text);
  if (lang === "html") {
    html = html.replace(/(&lt;\/?[\w-]+)/g, '<span class="tok-tag">$1</span>');
  } else if (lang === "css") {
    html = html.replace(/([\w-]+)(?=\s*:)/g, '<span class="tok-attr">$1</span>');
  } else {
    html = html
      .replace(/(\/\/.*$|#.*$)/gm, '<span class="tok-comment">$1</span>')
      .replace(/("[^"\n]*"|'[^'\n]*'|`[^`\n]*`)/g, '<span class="tok-string">$1</span>')
      .replace(/\b(\d+\.?\d*)\b/g, '<span class="tok-number">$1</span>');
    const kw = KEYWORDS.generic.join("|");
    html = html.replace(new RegExp(`\\b(${kw})\\b`, "g"), '<span class="tok-keyword">$1</span>');
    html = html.replace(/\b([a-zA-Z_][\w]*)(?=\()/g, '<span class="tok-fn">$1</span>');
  }
  return html;
}

// ---------- RENDER CODE ----------
function renderCode() {
  const text = state.text;
  const typed = state.typed;
  const blind = els.mode.value === "blind" && state.running;
  let html = "";
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    let cls = "char";
    if (i < typed.length) {
      cls += typed[i] === ch ? " correct" : " incorrect";
    } else if (i === typed.length) {
      cls += " current";
    }
    const display = ch === "\n" ? "↵\n" : escapeHtml(ch);
    if (blind && i >= typed.length) {
      html += `<span class="${cls}">${ch === "\n" ? "\n" : "·"}</span>`;
    } else {
      html += `<span class="${cls}">${display}</span>`;
    }
  }
  els.codeDisplay.innerHTML = html;

  const lines = text.split("\n").length;
  els.lineNumbers.innerHTML = Array.from({length:lines}, (_,i)=>i+1).join("<br>");
}

// ---------- SNIPPET SELECTION ----------
function pickSnippet() {
  const lang = els.language.value;
  const diff = els.difficulty.value;
  const cfg = DIFF_CFG[diff];
  const pool = cfg.snippetPool;
  const langSnippets = SNIPPETS[lang] || SNIPPETS.javascript;
  const buckets = pool.flatMap(p => langSnippets[p] || []).filter(Boolean);
  let pickFrom = buckets.length ? buckets : Object.values(langSnippets).flat();

  if (els.mode.value === "adaptive" && state.wpmHistory.length > 3) {
    const avg = state.wpmHistory.reduce((a,b)=>a+b,0)/state.wpmHistory.length;
    pickFrom = pickFrom.sort((a,b)=> avg>60 ? b.length-a.length : a.length-b.length);
    pickFrom = pickFrom.slice(0, Math.max(3, Math.ceil(pickFrom.length/2)));
  }
  return pickFrom[Math.floor(Math.random()*pickFrom.length)];
}

function loadSnippet() {
  state.text = pickSnippet();
  state.typed = "";
  els.tabName.textContent = `snippet.${LANG_EXT[els.language.value]}`;
  els.ideLang.textContent = LANG_LABELS[els.language.value];
  els.ideDiff.textContent = els.difficulty.value.replace(/^./, c=>c.toUpperCase());
  renderCode();
}

// ---------- ACTIVE MODES BADGES ----------
function refreshModeBadges() {
  const mode = els.mode.value;
  const diff = els.difficulty.value;
  const badges = [
    { label: `Mode: ${capitalize(mode)}` },
    { label: `Difficulty: ${capitalize(diff)}` },
    { label: `Lang: ${LANG_LABELS[els.language.value]}` }
  ];
  els.activeModes.innerHTML = badges.map(b => `<span class="mode-badge">${b.label}</span>`).join("");
}
function capitalize(s){ return s.replace(/^./, c=>c.toUpperCase()); }

// ---------- POWERUPS ----------
function renderPowerups() {
  els.powerups.innerHTML = POWERUPS.map(p => `
    <div class="pu" data-id="${p.id}">
      <div class="pu-name">${p.name}</div>
      <div class="pu-desc">${p.desc}</div>
      <div class="pu-cd" data-cd="${p.id}" style="display:none">0</div>
    </div>
  `).join("");
  els.powerups.querySelectorAll(".pu").forEach(el => {
    el.addEventListener("click", () => triggerPowerup(el.dataset.id));
  });
}
function triggerPowerup(id) {
  if (!state.running) { addTerm("Start a session to use powerups.","warn"); return; }
  if (state.cdTimers[id]) return;
  const p = POWERUPS.find(x => x.id === id);
  const cdEl = els.powerups.querySelector(`[data-cd="${id}"]`);
  const puEl = els.powerups.querySelector(`[data-id="${id}"]`);
  puEl.classList.add("active");
  addTerm(`> powerup ${p.name} activated`,"good");
  beep(660, 80, "sine", 0.06);

  if (id === "freeze") state.activeEffects.freeze = Date.now() + p.dur;
  if (id === "double") state.activeEffects.double = Date.now() + p.dur;
  if (id === "slow")   state.activeEffects.slow   = Date.now() + p.dur;
  if (id === "combo")  state.activeEffects.comboSaver = Date.now() + p.dur;
  if (id === "shield") state.activeEffects.shield = 3;
  if (id === "correct") { state.errors = Math.max(0, state.errors-1); updateStats(); }
  if (id === "skip") { loadSnippet(); }
  if (id === "acc") { state.correct += Math.ceil(state.total*0.05); updateStats(); }
  if (id === "time") { state.timeLeft += 10; }
  if (id === "bonus") { state.score += 200; updateStats(); }

  let cd = p.cd;
  cdEl.style.display = "flex"; cdEl.textContent = cd;
  state.cdTimers[id] = setInterval(() => {
    cd--;
    cdEl.textContent = cd;
    if (cd <= 0) {
      clearInterval(state.cdTimers[id]);
      state.cdTimers[id] = null;
      cdEl.style.display = "none";
      puEl.classList.remove("active");
    }
  }, 1000);
}

// ---------- RACE ----------
function startRace() {
  const names = ["Ada","Linus","Grace","Dennis","Margaret"];
  state.racers = names.slice(0,3).map(n => ({ name:n, wpm: 30 + Math.random()*60, progress: 0 }));
  state.racers.unshift({ name:"You", you:true, wpm:0, progress:0 });
  renderRace();
  clearInterval(state.raceTimer);
  state.raceTimer = setInterval(() => {
    state.racers.forEach(r => {
      if (!r.you) {
        r.wpm = Math.max(20, r.wpm + (Math.random()-0.5)*4);
        r.progress = Math.min(100, r.progress + r.wpm/120);
      } else {
        r.wpm = +($("wpm").textContent) || 0;
        r.progress = state.text.length ? Math.min(100, (state.typed.length/state.text.length)*100) : 0;
      }
    });
    renderRace();
  }, 500);
}
function renderRace() {
  state.racers.sort((a,b) => b.progress - a.progress);
  els.race.innerHTML = state.racers.map(r => `
    <div class="racer ${r.you?'you':''}">
      <div class="racer-name">${r.name}</div>
      <div class="racer-track"><div class="racer-fill" style="width:${r.progress}%"></div></div>
      <div class="racer-wpm">${Math.round(r.wpm)}wpm</div>
    </div>
  `).join("");
}

// ---------- INPUT HANDLING ----------
els.codeInput.addEventListener("input", e => {
  if (!state.running) return;
  const val = els.codeInput.value;
  const prev = state.typed;

  if (val.length < prev.length) {
    state.backspaces++;
    state.typed = val;
    renderCode();
    return;
  }

  const idx = val.length - 1;
  const newChar = val[idx];
  const expected = state.text[idx];
  const mode = els.mode.value;

  state.total++;

  const now = performance.now();
  if (state.lastKeyTime) {
    const delta = now - state.lastKeyTime;
    state.keyTimes[expected] = state.keyTimes[expected] || [];
    state.keyTimes[expected].push(delta);
  }
  state.lastKeyTime = now;

  if (newChar === expected) {
    state.correct++;
    state.combo++;
    state.maxCombo = Math.max(state.maxCombo, state.combo);
    state.typed = val;
    beep(800 + Math.min(state.combo*5, 400), 18, "square", 0.02);

    if (state.typed.length >= state.text.length) {
      state.snippets++;
      if (state.errors === 0) state.perfectSnippets++;
      beep(900, 100, "sine", 0.05);
      addTerm(`> snippet complete (+${Math.round(50*state.multiplier)} pts)`,"good");
      state.score += Math.round(50 * state.multiplier);
      loadSnippet();
      return;
    }
  } else {
    if (state.activeEffects.shield > 0) {
      state.activeEffects.shield--;
      state.correct++;
      state.typed = val.slice(0,-1) + expected;
      els.codeInput.value = state.typed;
      addTerm(`> shield absorbed error (${state.activeEffects.shield} left)`,"warn");
    } else {
      state.errors++;
      state.keyErrors[expected] = (state.keyErrors[expected]||0)+1;
      if (state.activeEffects.comboSaver < Date.now()) state.combo = 0;
      beep(180, 60, "sawtooth", 0.04);

      if (mode === "sudden") { addTerm("> SUDDEN DEATH — game over","bad"); endGame(); return; }
      if (mode === "hardcore") { state.timeLeft = Math.max(0, state.timeLeft - 3); }
      if (mode === "accuracy" && state.errors > 5) { addTerm("> too many errors","bad"); endGame(); return; }

      state.typed = val;
    }
  }
  renderCode();
  updateStats();
});

els.codeInput.addEventListener("focus", () => {
  els.codeInput.setSelectionRange(els.codeInput.value.length, els.codeInput.value.length);
});

// ---------- STATS ----------
function updateStats() {
  const elapsed = Math.max(1, (Date.now() - state.startTime)/1000);
  const minutes = elapsed/60;
  const words = state.correct/5;
  const wpm = Math.round(words/minutes);
  const raw = Math.round((state.total/5)/minutes);
  const acc = state.total > 0 ? Math.max(0, Math.round((state.correct/state.total)*100)) : 100;

  let mult = 1 + Math.floor(state.combo/10)*0.5;
  if (state.activeEffects.double > Date.now()) mult *= 2;
  state.multiplier = +mult.toFixed(1);

  state.score = Math.max(state.score, Math.round((state.correct * state.multiplier) * DIFF_CFG[els.difficulty.value].mult));

  els.wpm.textContent = wpm;
  els.rawWpm.textContent = raw;
  els.accuracy.textContent = acc;
  els.errors.textContent = state.errors;
  els.score.textContent = state.score;
  els.multiplier.textContent = state.multiplier;
  els.combo.textContent = state.combo;
  els.maxCombo.textContent = state.maxCombo;

  if (state.wpmHistory.length > 1) {
    const arr = state.wpmHistory;
    const mean = arr.reduce((a,b)=>a+b,0)/arr.length;
    const variance = arr.reduce((s,x)=>s+(x-mean)**2,0)/arr.length;
    const std = Math.sqrt(variance);
    const cons = Math.max(0, Math.round(100 - std));
    els.consistency.textContent = cons;
  }
}

// ---------- TERMINAL ----------
function addTerm(msg, cls="") {
  const line = document.createElement("div");
  line.className = "term-line " + cls;
  line.textContent = msg;
  els.terminalBody.appendChild(line);
  els.terminalBody.scrollTop = els.terminalBody.scrollHeight;
  while (els.terminalBody.children.length > 30) els.terminalBody.removeChild(els.terminalBody.firstChild);
}

// ---------- GAME LOOP ----------
function startGame() {
  Object.assign(state, {
    running:true, typed:"", errors:0, correct:0, total:0, backspaces:0,
    combo:0, maxCombo:0, score:0, multiplier:1,
    wpmHistory:[], accHistory:[], consHistory:[], keyTimes:{}, keyErrors:{},
    snippets:0, perfectSnippets:0,
    activeEffects:{ freeze:0, double:0, slow:0, comboSaver:0, shield:0 }
  });
  state.timeLimit = +els.duration.value;
  state.timeLeft = els.mode.value === "marathon" ? Infinity : state.timeLimit;
  if (els.mode.value === "marathon") state.timeLimit = 999;
  state.startTime = Date.now();
  els.codeInput.value = "";
  els.codeInput.focus();
  loadSnippet();
  refreshModeBadges();
  addTerm(`> session started · ${LANG_LABELS[els.language.value]} · ${capitalize(els.mode.value)}`,"good");
  startRace();

  clearInterval(state.mainTimer);
  state.mainTimer = setInterval(tick, 200);
}

function tick() {
  if (!state.running) return;
  if (state.activeEffects.freeze > Date.now()) {
    els.timer.textContent = isFinite(state.timeLeft) ? Math.ceil(state.timeLeft) : "∞";
    return;
  }
  const speed = state.activeEffects.slow > Date.now() ? 0.5 : 1;
  state.timeLeft -= 0.2 * speed;

  if (isFinite(state.timeLeft)) {
    els.timer.textContent = Math.max(0, Math.ceil(state.timeLeft));
    els.timerBar.style.width = Math.max(0, (state.timeLeft/state.timeLimit)*100) + "%";
  } else {
    els.timer.textContent = "∞";
  }

  const elapsed = (Date.now() - state.startTime)/1000;
  if (elapsed > 0) {
    const wpm = Math.round((state.correct/5)/(elapsed/60));
    state.wpmHistory.push(wpm);
    if (state.wpmHistory.length > 60) state.wpmHistory.shift();
  }
  updateStats();

  if (state.timeLeft <= 0) endGame();
}

function endGame() {
  state.running = false;
  clearInterval(state.mainTimer);
  clearInterval(state.raceTimer);
  Object.values(state.cdTimers).forEach(t => t && clearInterval(t));
  state.cdTimers = {};
  addTerm("> session ended","warn");
  saveResult();
  showResults();
}

// ---------- SAVE RESULT ----------
function saveResult() {
  const elapsed = Math.max(1, (Date.now()-state.startTime)/1000);
  const wpm = +els.wpm.textContent;
  const acc = +els.accuracy.textContent;
  const cons = +els.consistency.textContent || 0;
  const entry = {
    date: Date.now(),
    score: state.score,
    wpm, acc, cons,
    maxCombo: state.maxCombo,
    language: els.language.value,
    mode: els.mode.value,
    difficulty: els.difficulty.value
  };

  const lb = store.get("leaderboard", []);
  lb.push(entry);
  store.set("leaderboard", lb.slice(-200));

  const hist = store.get("history", []);
  hist.push(entry);
  store.set("history", hist.slice(-100));

  const langs = new Set(store.get("languages", []));
  langs.add(entry.language);
  store.set("languages", [...langs]);

  const today = new Date().toDateString();
  const last = store.get("lastPlay", null);
  let streak = store.get("streak", 0);
  if (last !== today) {
    const yesterday = new Date(Date.now()-86400000).toDateString();
    streak = (last === yesterday) ? streak + 1 : 1;
    store.set("streak", streak);
    store.set("lastPlay", today);
  }
  els.dailyStreak.textContent = streak;

  const unlocked = new Set(store.get("achievements", []));
  const newlyUnlocked = [];
  function unlock(id) { if (!unlocked.has(id)) { unlocked.add(id); newlyUnlocked.push(id); } }
  if (wpm >= 100) unlock("wpm100");
  if (wpm >= 130) unlock("demon");
  if (acc === 100 && state.total > 20) unlock("perfect");
  if (state.maxCombo >= 50) unlock("combo50");
  if (state.errors === 0 && state.total > 20) unlock("noMiss");
  if (state.timeLimit >= 300) unlock("marathon");
  if (langs.size >= 5) unlock("poly");
  if (state.perfectSnippets >= 10) unlock("master");
  if (streak >= 7) unlock("daily7");
  if (state.score >= 10000) unlock("score10k");
  store.set("achievements", [...unlocked]);
  state._newlyUnlocked = newlyUnlocked;
}

// ---------- RESULTS MODAL ----------
function showResults() {
  els.resWpm.textContent = els.wpm.textContent;
  els.resAcc.textContent = els.accuracy.textContent + "%";
  els.resScore.textContent = state.score;
  els.resCombo.textContent = state.maxCombo;
  els.resCons.textContent = (els.consistency.textContent || 0) + "%";

  const wpm = +els.wpm.textContent;
  let rank = "Novice";
  if (wpm >= 40) rank = "Apprentice";
  if (wpm >= 60) rank = "Proficient";
  if (wpm >= 80) rank = "Expert";
  if (wpm >= 100) rank = "Master";
  if (wpm >= 130) rank = "Legendary";
  els.resRank.textContent = rank;

  const slowKeys = Object.entries(state.keyTimes)
    .map(([k,arr]) => [k, arr.reduce((a,b)=>a+b,0)/arr.length])
    .sort((a,b) => b[1]-a[1]).slice(0,5).map(([k]) => JSON.stringify(k)).join(", ") || "—";
  const worstKeys = Object.entries(state.keyErrors)
    .sort((a,b) => b[1]-a[1]).slice(0,5).map(([k,v]) => `${JSON.stringify(k)} (${v})`).join(", ") || "none";

  const tips = [];
  if (+els.accuracy.textContent < 92) tips.push("Slow down slightly to improve accuracy — speed follows.");
  if (state.maxCombo < 20) tips.push("Build longer combos by anticipating common syntax patterns.");
  if (state.backspaces > 10) tips.push("Reduce backspace usage; commit to each keystroke.");
  if (wpm < 60) tips.push("Try the Speed Run mode to push raw pace.");
  if (!tips.length) tips.push("Excellent session — try a harder difficulty.");

  const analysis = `Strengths: stable rhythm in ${LANG_LABELS[els.language.value]}.\nWeakness: slowest keys → ${slowKeys}.\nMost mistyped: ${worstKeys}.\nRecommended: ${tips.join(" ")}`;
  els.resAnalysis.textContent = analysis;
  els.aiAnalysis.textContent = analysis;

  els.resUnlocks.innerHTML = (state._newlyUnlocked||[]).map(id => {
    const a = ACHIEVEMENTS.find(x => x.id===id);
    return a ? `<span class="unlock-pill">Unlocked: ${a.name}</span>` : "";
  }).join("");

  const ctx = $("resChart").getContext("2d");
  if (window._resChart) window._resChart.destroy();
  window._resChart = new Chart(ctx, {
    type:"line",
    data:{ labels: state.wpmHistory.map((_,i)=>i),
      datasets:[{ label:"WPM", data: state.wpmHistory, borderColor:"#6366f1",
        backgroundColor:"rgba(99,102,241,0.15)", tension:0.35, fill:true, pointRadius:0 }] },
    options: chartOpts()
  });

  els.resultsModal.classList.add("show");
}
els.closeModal.addEventListener("click", () => els.resultsModal.classList.remove("show"));

// ---------- CHART OPTIONS ----------
function chartOpts(){
  const muted = getComputedStyle(document.body).getPropertyValue("--muted").trim();
  const border = getComputedStyle(document.body).getPropertyValue("--border").trim();
  return {
    responsive:true, maintainAspectRatio:false,
    plugins:{ legend:{ labels:{ color: muted, font:{ size:11 } } } },
    scales:{
      x:{ ticks:{ color: muted, font:{ size:10 } }, grid:{ color: border } },
      y:{ ticks:{ color: muted, font:{ size:10 } }, grid:{ color: border } }
    }
  };
}

// ---------- ANALYTICS RENDER ----------
function renderCharts() {
  const hist = store.get("history", []);
  const labels = hist.map((_,i)=>i+1);
  drawChart("chartWpm","line",labels,hist.map(h=>h.wpm),"WPM","#6366f1");
  drawChart("chartAcc","line",labels,hist.map(h=>h.acc),"Accuracy","#34d399");
  drawChart("chartCons","line",labels,hist.map(h=>h.cons||0),"Consistency","#22d3ee");

  const byLang = {};
  hist.forEach(h => { byLang[h.language] = byLang[h.language] || []; byLang[h.language].push(h.wpm); });
  const langLabels = Object.keys(byLang).map(k => LANG_LABELS[k] || k);
  const langData = Object.values(byLang).map(arr => Math.round(arr.reduce((a,b)=>a+b,0)/arr.length));
  drawChart("chartLang","bar",langLabels,langData,"Avg WPM","#a78bfa");

  const byDay = {};
  hist.forEach(h => { const d = new Date(h.date).toDateString(); byDay[d] = byDay[d] || []; byDay[d].push(h.wpm); });
  const dayLabels = Object.keys(byDay).slice(-14);
  const dayData = dayLabels.map(d => Math.round(byDay[d].reduce((a,b)=>a+b,0)/byDay[d].length));
  drawChart("chartDaily","line",dayLabels.map(d => d.slice(4,10)),dayData,"Daily WPM","#fbbf24");

  const errs = store.get("globalKeyErrors",{});
  Object.entries(state.keyErrors).forEach(([k,v]) => errs[k] = (errs[k]||0)+v);
  store.set("globalKeyErrors", errs);
  const top = Object.entries(errs).sort((a,b)=>b[1]-a[1]).slice(0,10);
  drawChart("chartHeat","bar",top.map(t=>JSON.stringify(t[0])),top.map(t=>t[1]),"Errors","#f87171");
}
function drawChart(id, type, labels, data, label, color){
  const el = $(id);
  if (!el) return;
  if (window["_c_"+id]) window["_c_"+id].destroy();
  window["_c_"+id] = new Chart(el.getContext("2d"), {
    type,
    data:{ labels, datasets:[{ label, data, borderColor: color, backgroundColor: color+"33",
      tension:0.3, fill:true, pointRadius:0 }] },
    options: chartOpts()
  });
}

// ---------- LEADERBOARD ----------
function renderLeaderboard(filter="all") {
  let lb = store.get("leaderboard", []).slice();
  const now = Date.now();
  if (filter === "daily") lb = lb.filter(e => now - e.date < 86400000);
  if (filter === "weekly") lb = lb.filter(e => now - e.date < 7*86400000);
  if (filter === "wpm") lb.sort((a,b)=>b.wpm-a.wpm);
  else if (filter === "acc") lb.sort((a,b)=>b.acc-a.acc);
  else lb.sort((a,b)=>b.score-a.score);
  lb = lb.slice(0, 30);
  els.leaderboardBody.innerHTML = lb.map((e,i) => `
    <tr>
      <td>${i+1}</td>
      <td>${e.score}</td>
      <td>${e.wpm}</td>
      <td>${e.acc}%</td>
      <td>${LANG_LABELS[e.language]||e.language}</td>
      <td>${capitalize(e.mode)}</td>
      <td>${new Date(e.date).toLocaleDateString()}</td>
    </tr>`).join("") || `<tr><td colspan="7" style="text-align:center;color:var(--muted);padding:30px">No entries yet.</td></tr>`;
}
document.querySelectorAll(".lb-tab").forEach(t => {
  t.addEventListener("click", () => {
    document.querySelectorAll(".lb-tab").forEach(x => x.classList.remove("active"));
    t.classList.add("active");
    renderLeaderboard(t.dataset.lb);
  });
});

// ---------- ACHIEVEMENTS ----------
function renderAchievements() {
  const unlocked = new Set(store.get("achievements", []));
  els.achievementsGrid.innerHTML = ACHIEVEMENTS.map(a => `
    <div class="ach ${unlocked.has(a.id)?'unlocked':''}">
      <div class="ach-name">${a.name}</div>
      <div class="ach-desc">${a.desc}</div>
      <div class="ach-status">${unlocked.has(a.id)?'Unlocked':'Locked'}</div>
    </div>
  `).join("");
}

// ---------- BUTTONS ----------
els.startBtn.addEventListener("click", () => {
  if (state.running) endGame();
  else startGame();
});
els.resetBtn.addEventListener("click", () => {
  if (state.running) endGame();
  els.codeInput.value = "";
  state.typed = "";
  loadSnippet();
});

els.language.addEventListener("change", () => { refreshModeBadges(); if (!state.running) loadSnippet(); });
els.difficulty.addEventListener("change", () => { refreshModeBadges(); if (!state.running) loadSnippet(); });
els.mode.addEventListener("change", refreshModeBadges);

els.globalSearch.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  if (!q) return;
  const match = Object.entries(LANG_LABELS).find(([k,v]) => v.toLowerCase().includes(q) || k.includes(q));
  if (match) els.language.value = match[0];
});

document.addEventListener("keydown", e => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") return;
  if (e.key === "Enter") els.startBtn.click();
});

document.querySelector(".code-area").addEventListener("click", () => els.codeInput.focus());

// ---------- BOOT ----------
initLanguageSelect();
applySettings();
renderPowerups();
refreshModeBadges();
loadSnippet();
renderAchievements();
els.dailyStreak.textContent = store.get("streak", 0);
addTerm("$ syntax-marathon --ready");
addTerm("> select a language and press Start");
