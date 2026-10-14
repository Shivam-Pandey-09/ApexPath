// Striver's A2Z DSA Sheet - Complete Data
// Source: https://takeuforward.org/prep-hub/strivers-a2z-dsa-sheet

const dsaSheet = [
  {
    id: 1,
    title: "Learn the Basics",
    description: "Start from scratch — learn programming basics, patterns, math, recursion, and hashing.",
    difficulty: "beginner",
    estimatedHours: 30,
    topics: [
      {
        id: "1.1", name: "Things to Know in C++/Java/Python",
        difficulty: "beginner",
        problems: ["User Input/Output", "Data Types", "If-Else Statements", "Switch Statement", "Arrays/Strings Basics", "For Loop", "While Loop", "Functions", "Pass by Reference & Value", "Time Complexity"]
      },
      {
        id: "1.2", name: "Build-up Logical Thinking — Pattern Problems",
        difficulty: "beginner",
        problems: ["Rectangular Star Pattern", "Right-Angled Triangle", "Right-Angled Number Triangle", "Right-Angled Number Triangle-II", "Inverted Right Triangle", "Inverted Numbered Right Triangle", "Star Pyramid", "Inverted Star Pyramid", "Diamond Star Pattern", "Half Diamond Star Pattern", "Binary Number Triangle", "Number Crown Pattern", "Increasing Number Triangle", "Increasing Letter Triangle", "Reverse Letter Triangle", "Alpha-Ramp Pattern", "Alpha-Hill Pattern", "Alpha-Triangle Pattern", "Symmetric-Void Pattern", "Symmetric-Butterfly Pattern", "Hollow Rectangle", "The Number Pattern"]
      },
      {
        id: "1.3", name: "Learn STL / Java Collections / Python Basics",
        difficulty: "beginner",
        problems: ["Pairs", "Vectors", "List", "Deque", "Stack", "Queue", "Priority Queue", "Set", "Map", "Algorithms (sort, accumulate, etc.)"]
      },
      {
        id: "1.4", name: "Know Basic Maths",
        difficulty: "beginner",
        problems: ["Count Digits", "Reverse a Number", "Check Palindrome", "GCD or HCF", "Armstrong Numbers", "Print all Divisors", "Check for Prime"]
      },
      {
        id: "1.5", name: "Learn Basic Recursion",
        difficulty: "beginner",
        problems: ["Print Name N Times", "Print 1 to N", "Print N to 1", "Sum of First N Numbers", "Factorial of N", "Reverse an Array", "Check if String is Palindrome", "Fibonacci Number"]
      },
      {
        id: "1.6", name: "Learn Basic Hashing",
        difficulty: "beginner",
        problems: ["Counting Frequencies of Elements", "Find Highest/Lowest Frequency Element"]
      }
    ]
  },
  {
    id: 2,
    title: "Sorting Techniques",
    description: "Master fundamental and advanced sorting algorithms.",
    difficulty: "beginner",
    estimatedHours: 8,
    topics: [
      {
        id: "2.1", name: "Sorting-I",
        difficulty: "beginner",
        problems: ["Selection Sort", "Bubble Sort", "Insertion Sort"]
      },
      {
        id: "2.2", name: "Sorting-II",
        difficulty: "intermediate",
        problems: ["Merge Sort", "Recursive Bubble Sort", "Recursive Insertion Sort", "Quick Sort"]
      }
    ]
  },
  {
    id: 3,
    title: "Arrays",
    description: "Solve problems on Arrays from Easy → Medium → Hard.",
    difficulty: "intermediate",
    estimatedHours: 40,
    topics: [
      {
        id: "3.1", name: "Easy Array Problems",
        difficulty: "beginner",
        problems: ["Largest Element in Array", "Second Largest Element", "Check if Array is Sorted", "Remove Duplicates from Sorted Array", "Left Rotate Array by One", "Rotate Array by D Places", "Move Zeros to End", "Linear Search", "Union of Two Sorted Arrays", "Intersection of Two Sorted Arrays", "Find Missing Number", "Maximum Consecutive Ones", "Find the Number that Appears Once", "Longest Subarray with Sum K (Positives + Negatives)"]
      },
      {
        id: "3.2", name: "Medium Array Problems",
        difficulty: "intermediate",
        problems: ["2Sum Problem", "Sort an Array of 0s, 1s, and 2s", "Majority Element (>N/2 times)", "Maximum Subarray Sum (Kadane's Algorithm)", "Print Maximum Subarray Sum", "Best Time to Buy and Sell Stock", "Rearrange Array Elements by Sign", "Next Permutation", "Leaders in an Array", "Longest Consecutive Sequence", "Set Matrix Zeros", "Rotate Image by 90 Degrees", "Spiral Traversal of Matrix", "Count Subarrays with Sum K", "Pascal's Triangle", "3Sum Problem", "4Sum Problem"]
      },
      {
        id: "3.3", name: "Hard Array Problems",
        difficulty: "advanced",
        problems: ["Majority Element (>N/3 times)", "Merge Overlapping Subintervals", "Merge Two Sorted Arrays Without Extra Space", "Find Missing and Repeating Numbers", "Count Inversions", "Reverse Pairs", "Maximum Product Subarray"]
      }
    ]
  },
  {
    id: 4,
    title: "Binary Search",
    description: "Master binary search on 1D arrays, 2D arrays, and answer-based search space.",
    difficulty: "intermediate",
    estimatedHours: 30,
    topics: [
      {
        id: "4.1", name: "BS on 1D Arrays",
        difficulty: "intermediate",
        problems: ["Binary Search to Find X", "Implement Lower Bound", "Implement Upper Bound", "Search Insert Position", "Floor/Ceil in Sorted Array", "First and Last Occurrence", "Count Occurrences in Sorted Array", "Search in Rotated Sorted Array I", "Search in Rotated Sorted Array II", "Find Minimum in Rotated Sorted Array", "Find Out How Many Times Array is Rotated", "Single Element in a Sorted Array", "Find Peak Element"]
      },
      {
        id: "4.2", name: "BS on Answers (Search Space)",
        difficulty: "intermediate",
        problems: ["Find Square Root of a Number", "Find Nth Root of a Number", "Koko Eating Bananas", "Minimum Days to Make M Bouquets", "Find the Smallest Divisor Given a Threshold", "Capacity to Ship Packages within D Days", "Kth Missing Positive Number", "Aggressive Cows", "Book Allocation / Painters Partition", "Split Array — Largest Sum", "Median of Two Sorted Arrays", "Kth Element of Two Sorted Arrays"]
      },
      {
        id: "4.3", name: "BS on 2D Arrays",
        difficulty: "intermediate",
        problems: ["Find Row with Maximum Number of 1s", "Search in a 2D Matrix", "Search in a Row and Column Wise Sorted Matrix", "Find Peak Element in 2D Matrix", "Matrix Median"]
      }
    ]
  },
  {
    id: 5,
    title: "Strings",
    description: "String manipulation — basic to medium level problems.",
    difficulty: "intermediate",
    estimatedHours: 15,
    topics: [
      {
        id: "5.1", name: "Basic String Problems",
        difficulty: "beginner",
        problems: ["Remove Outermost Parentheses", "Reverse Words in a String", "Largest Odd Number in String", "Longest Common Prefix", "Isomorphic Strings", "Rotate String", "Check if Two Strings are Anagrams"]
      },
      {
        id: "5.2", name: "Medium String Problems",
        difficulty: "intermediate",
        problems: ["Sort Characters by Frequency", "Maximum Nesting Depth of Parentheses", "Roman to Integer / Integer to Roman", "String to Integer (atoi)", "Count Number of Substrings", "Longest Palindromic Substring", "Sum of Beauty of All Substrings", "Reverse Every Word in a String"]
      }
    ]
  },
  {
    id: 6,
    title: "Linked List",
    description: "Learn and solve singly & doubly linked list problems.",
    difficulty: "intermediate",
    estimatedHours: 25,
    topics: [
      {
        id: "6.1", name: "1D Linked List Basics",
        difficulty: "beginner",
        problems: ["Introduction to Linked List", "Inserting a Node in LL", "Deleting a Node in LL", "Find Length of LL", "Search in a LL", "Convert Array to Linked List"]
      },
      {
        id: "6.2", name: "Doubly Linked List",
        difficulty: "beginner",
        problems: ["Introduction to DLL", "Insert Node in DLL", "Delete Node in DLL", "Reverse a DLL"]
      },
      {
        id: "6.3", name: "Medium LL Problems",
        difficulty: "intermediate",
        problems: ["Middle of a Linked List", "Reverse a Linked List (Iterative)", "Reverse a Linked List (Recursive)", "Detect a Loop in LL", "Find Starting Point of Loop", "Length of Loop in LL", "Check if LL is Palindrome", "Segregate Odd and Even Nodes", "Remove Nth Node from Back", "Delete the Middle Node", "Sort a Linked List", "Sort LL of 0s, 1s, and 2s", "Find Intersection Point of Y LL", "Add 1 to a Number Represented by LL", "Add Two Numbers in LL"]
      },
      {
        id: "6.4", name: "Hard LL Problems",
        difficulty: "advanced",
        problems: ["Reverse Nodes in K-Group", "Rotate a Linked List", "Flatten a Linked List", "Clone a Linked List with Random Pointers"]
      }
    ]
  },
  {
    id: 7,
    title: "Recursion & Backtracking",
    description: "Master recursion patterns and backtracking problems.",
    difficulty: "intermediate",
    estimatedHours: 25,
    topics: [
      {
        id: "7.1", name: "Get a Strong Hold",
        difficulty: "intermediate",
        problems: ["Print All Subsequences / Power Set", "Print Subsequences with Sum K", "Check if Subsequence with Sum K Exists", "Count Subsequences with Sum K", "Generate All Binary Strings", "Generate Parentheses", "Print All Permutations"]
      },
      {
        id: "7.2", name: "Backtracking Problems",
        difficulty: "advanced",
        problems: ["Combination Sum I", "Combination Sum II", "Combination Sum III", "Subset Sum I", "Subset Sum II", "Letter Combinations of a Phone Number", "Palindrome Partitioning", "Word Search", "N-Queens", "Rat in a Maze", "Word Break", "Sudoku Solver", "M-Coloring Problem", "Expression Add Operators"]
      }
    ]
  },
  {
    id: 8,
    title: "Bit Manipulation",
    description: "Learn bit manipulation concepts and solve problems.",
    difficulty: "intermediate",
    estimatedHours: 12,
    topics: [
      {
        id: "8.1", name: "Learn Bit Manipulation",
        difficulty: "beginner",
        problems: ["Introduction to Bit Manipulation", "Check if ith Bit is Set", "Set/Clear/Toggle ith Bit", "Remove Last Set Bit (Rightmost)", "Check if Number is Power of 2", "Count Set Bits", "Check if Number is Odd or Even"]
      },
      {
        id: "8.2", name: "Interview / Practice Problems",
        difficulty: "intermediate",
        problems: ["Power Set using Bits", "Find Number Appearing Odd Times", "XOR of Numbers from L to R", "Two Numbers with Odd Occurrences", "XOR of Numbers in Given Range", "Divide Two Integers Without Operators", "Count Total Set Bits from 1 to N", "Find the Two Numbers Appearing Once (Others Twice)", "Find the Number Appearing Once (Others Thrice)", "Minimum Bit Flips to Convert Number"]
      }
    ]
  },
  {
    id: 9,
    title: "Stack & Queues",
    description: "Learn stack/queue data structures and solve implementation + application problems.",
    difficulty: "intermediate",
    estimatedHours: 25,
    topics: [
      {
        id: "9.1", name: "Learning — Stack & Queue",
        difficulty: "beginner",
        problems: ["Implement Stack using Arrays", "Implement Queue using Arrays", "Implement Stack using Linked List", "Implement Queue using Linked List", "Implement Stack using Queue", "Implement Queue using Stack", "Valid Parentheses", "Implement Min Stack"]
      },
      {
        id: "9.2", name: "Prefix, Infix, Postfix Conversions",
        difficulty: "intermediate",
        problems: ["Infix to Postfix", "Infix to Prefix", "Postfix to Infix", "Prefix to Infix", "Postfix to Prefix", "Prefix to Postfix"]
      },
      {
        id: "9.3", name: "Monotonic Stack/Queue Problems",
        difficulty: "intermediate",
        problems: ["Next Greater Element I", "Next Greater Element II (Circular)", "Next Smaller Element", "Number of NGEs to the Right", "Trapping Rain Water", "Sum of Subarray Minimums", "Stock Span Problem", "Asteroid Collision", "Sum of Subarray Ranges", "Remove K Digits", "Largest Rectangle in Histogram", "Maximal Rectangle"]
      },
      {
        id: "9.4", name: "Implementation Problems",
        difficulty: "intermediate",
        problems: ["Sliding Window Maximum", "Celebrity Problem", "LRU Cache", "LFU Cache", "Online Stock Span"]
      }
    ]
  },
  {
    id: 10,
    title: "Sliding Window & Two Pointer",
    description: "Master sliding window and two pointer techniques.",
    difficulty: "intermediate",
    estimatedHours: 18,
    topics: [
      {
        id: "10.1", name: "Medium Problems",
        difficulty: "intermediate",
        problems: ["Longest Substring Without Repeating Characters", "Max Consecutive Ones III", "Fruit Into Baskets", "Longest Repeating Character Replacement", "Binary Subarrays With Sum", "Count Nice Subarrays", "Number of Substrings Containing All Three Characters", "Maximum Points You Can Obtain from Cards"]
      },
      {
        id: "10.2", name: "Hard Problems",
        difficulty: "advanced",
        problems: ["Longest Substring with At Most K Distinct Characters", "Subarray with K Different Integers", "Minimum Window Substring", "Minimum Window Subsequence"]
      }
    ]
  },
  {
    id: 11,
    title: "Heaps",
    description: "Learn heap data structure and solve priority queue problems.",
    difficulty: "intermediate",
    estimatedHours: 15,
    topics: [
      {
        id: "11.1", name: "Learning — Heaps",
        difficulty: "beginner",
        problems: ["Introduction to Priority Queues / Heaps", "Min Heap / Max Heap Implementation", "Check if Array is a Min Heap", "Convert Min Heap to Max Heap", "Heap Sort"]
      },
      {
        id: "11.2", name: "Medium Problems",
        difficulty: "intermediate",
        problems: ["Kth Largest Element", "Kth Smallest Element", "Sort a Nearly Sorted Array (K-Sorted)", "Merge M Sorted Lists", "Replace Each Element by its Rank", "Task Scheduler", "Hand of Straights"]
      },
      {
        id: "11.3", name: "Hard Problems",
        difficulty: "advanced",
        problems: ["Design Twitter", "Connect N Ropes with Minimum Cost", "Kth Largest Element in a Stream", "Maximum Sum Combination", "Find Median from Data Stream", "K Most Frequent Elements"]
      }
    ]
  },
  {
    id: 12,
    title: "Greedy Algorithms",
    description: "Learn greedy approach for optimization problems.",
    difficulty: "intermediate",
    estimatedHours: 15,
    topics: [
      {
        id: "12.1", name: "Easy Greedy Problems",
        difficulty: "beginner",
        problems: ["Assign Cookies", "Fractional Knapsack", "Minimum Coins (Greedy)", "Lemonade Change", "Valid Parenthesis String"]
      },
      {
        id: "12.2", name: "Medium/Hard Greedy Problems",
        difficulty: "intermediate",
        problems: ["N Meetings in One Room", "Minimum Number of Platforms", "Job Sequencing Problem", "Candy Distribution", "Shortest Job First (SJF)", "Page Faults in LRU", "Insert Interval", "Merge Intervals", "Non-Overlapping Intervals", "Jump Game I", "Jump Game II"]
      }
    ]
  },
  {
    id: 13,
    title: "Binary Trees",
    description: "Learn tree traversals and solve medium to hard binary tree problems.",
    difficulty: "advanced",
    estimatedHours: 35,
    topics: [
      {
        id: "13.1", name: "Traversals",
        difficulty: "intermediate",
        problems: ["Introduction to Binary Trees", "Binary Tree Representation", "Preorder Traversal", "Inorder Traversal", "Postorder Traversal", "Level Order Traversal", "Iterative Preorder", "Iterative Inorder", "Iterative Postorder (1 Stack)", "Iterative Postorder (2 Stacks)", "All Traversals in One (Pre/In/Post)"]
      },
      {
        id: "13.2", name: "Medium Problems",
        difficulty: "intermediate",
        problems: ["Height of Binary Tree", "Check if Balanced Binary Tree", "Diameter of Binary Tree", "Maximum Path Sum", "Check if Two Trees are Identical", "Zig-Zag Traversal", "Boundary Traversal", "Vertical Order Traversal", "Top View of Binary Tree", "Bottom View of Binary Tree", "Right / Left Side View", "Check for Symmetry"]
      },
      {
        id: "13.3", name: "Hard Problems",
        difficulty: "advanced",
        problems: ["Root to Node Path", "Lowest Common Ancestor", "Maximum Width of Binary Tree", "Children Sum Property", "Print All Nodes at Distance K", "Minimum Time to Burn Entire Tree", "Count Total Nodes in Complete Binary Tree", "Requirements Needed to Construct Unique BT", "Construct BT from Inorder and Preorder", "Construct BT from Inorder and Postorder", "Serialize and Deserialize Binary Tree", "Flatten Binary Tree to Linked List", "Morris Preorder Traversal", "Morris Inorder Traversal"]
      }
    ]
  },
  {
    id: 14,
    title: "Binary Search Trees",
    description: "Learn BST concepts and solve practice problems.",
    difficulty: "advanced",
    estimatedHours: 15,
    topics: [
      {
        id: "14.1", name: "BST Concepts",
        difficulty: "intermediate",
        problems: ["Introduction to BST", "Search in a BST", "Find Min/Max in BST"]
      },
      {
        id: "14.2", name: "Practice Problems",
        difficulty: "advanced",
        problems: ["Ceil in a BST", "Floor in a BST", "Insert a Node in BST", "Delete a Node in BST", "Kth Smallest / Largest Element in BST", "Check if a BT is BST", "LCA of a BST", "Construct BST from Preorder", "Inorder Successor / Predecessor in BST", "BST Iterator", "Two Sum in BST", "Recover BST", "Largest BST in Binary Tree"]
      }
    ]
  },
  {
    id: 15,
    title: "Graphs",
    description: "Learn graph representations, traversals, shortest paths, MST and more.",
    difficulty: "advanced",
    estimatedHours: 50,
    topics: [
      {
        id: "15.1", name: "Learning — Graph Basics",
        difficulty: "intermediate",
        problems: ["Introduction to Graphs", "Graph Representation (Adjacency Matrix/List)", "BFS Traversal", "DFS Traversal", "Connected Components"]
      },
      {
        id: "15.2", name: "BFS / DFS Problems",
        difficulty: "intermediate",
        problems: ["Number of Provinces", "Connected Components in Graph", "Flood Fill Algorithm", "Number of Islands", "Rotting Oranges", "Distance of Nearest Cell Having 0/1", "Surrounded Regions", "Number of Enclaves", "Word Ladder I", "Word Ladder II", "Number of Distinct Islands", "Bipartite Graph (BFS)", "Bipartite Graph (DFS)", "Cycle Detection in Undirected Graph (BFS)", "Cycle Detection in Undirected Graph (DFS)", "Cycle Detection in Directed Graph (DFS)", "Topological Sort (DFS)", "Kahn's Algorithm (BFS Topo Sort)", "Course Schedule I & II", "Find Eventual Safe States"]
      },
      {
        id: "15.3", name: "Shortest Path Algorithms",
        difficulty: "advanced",
        problems: ["Shortest Path in Undirected Graph with Unit Weights", "Shortest Path in DAG", "Dijkstra's Algorithm (Priority Queue)", "Dijkstra's Algorithm (Set)", "Shortest Path in Binary Maze", "Path with Minimum Effort", "Cheapest Flights Within K Stops", "Network Delay Time", "Number of Ways to Arrive at Destination", "Minimum Multiplications to Reach End", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm", "City with Smallest Number of Neighbors"]
      },
      {
        id: "15.4", name: "MST / Disjoint Set",
        difficulty: "advanced",
        problems: ["Prim's Algorithm (MST)", "Kruskal's Algorithm (MST)", "Disjoint Set Union (by Rank)", "Disjoint Set Union (by Size)", "Number of Operations to Make Network Connected", "Most Stones Removed with Same Row or Column", "Accounts Merge", "Number of Islands II (Online Queries)", "Making a Large Island", "Swim in Rising Water"]
      },
      {
        id: "15.5", name: "Other Graph Algorithms",
        difficulty: "advanced",
        problems: ["Kosaraju's Algorithm (SCC)", "Bridges in Graph (Tarjan's Algorithm)", "Articulation Points", "Strongly Connected Components"]
      }
    ]
  },
  {
    id: 16,
    title: "Dynamic Programming",
    description: "Master all DP patterns — 1D, 2D, strings, stocks, LIS, MCM, and more.",
    difficulty: "advanced",
    estimatedHours: 60,
    topics: [
      {
        id: "16.1", name: "Introduction to DP / 1D DP",
        difficulty: "intermediate",
        problems: ["Introduction to DP", "Climbing Stairs", "Frog Jump", "Frog Jump with K Distances", "Maximum Sum of Non-Adjacent Elements (House Robber)", "House Robber II"]
      },
      {
        id: "16.2", name: "2D / 3D DP & Grids",
        difficulty: "intermediate",
        problems: ["Grid Unique Paths I", "Grid Unique Paths II", "Minimum Path Sum in Grid", "Minimum Path Sum in Triangle", "Minimum / Maximum Falling Path Sum", "3D DP — Ninja's Training", "Cherry Pickup I", "Cherry Pickup II"]
      },
      {
        id: "16.3", name: "DP on Subsequences / Subsets",
        difficulty: "advanced",
        problems: ["Subset Sum Equal to Target", "Partition Equal Subset Sum", "Minimum Sum Partition / Difference", "Count Subsets with Sum K", "Count Partitions with Given Difference", "Target Sum (Assign +/- Signs)", "0/1 Knapsack", "Coin Change (Minimum Coins)", "Coin Change II (Count Ways)", "Unbounded Knapsack", "Rod Cutting Problem"]
      },
      {
        id: "16.4", name: "DP on Strings",
        difficulty: "advanced",
        problems: ["Longest Common Subsequence", "Print Longest Common Subsequence", "Longest Common Substring", "Longest Palindromic Subsequence", "Minimum Insertions to Make String Palindrome", "Minimum Insertions/Deletions to Convert String A to B", "Shortest Common Supersequence", "Distinct Subsequences", "Edit Distance", "Wildcard Matching"]
      },
      {
        id: "16.5", name: "DP on Stocks",
        difficulty: "advanced",
        problems: ["Best Time to Buy and Sell Stock I", "Best Time to Buy and Sell Stock II", "Best Time to Buy and Sell Stock III", "Best Time to Buy and Sell Stock IV", "Best Time to Buy and Sell Stock with Cooldown", "Best Time to Buy and Sell Stock with Transaction Fee"]
      },
      {
        id: "16.6", name: "Longest Increasing Subsequence (LIS)",
        difficulty: "advanced",
        problems: ["Longest Increasing Subsequence", "Print LIS", "Largest Divisible Subset", "Longest Chain of Pairs", "Longest String Chain", "Number of Longest Increasing Subsequences"]
      },
      {
        id: "16.7", name: "MCM / Partition DP",
        difficulty: "advanced",
        problems: ["Matrix Chain Multiplication", "Minimum Cost to Cut the Stick", "Burst Balloons", "Boolean Evaluation to True", "Palindrome Partitioning II", "Egg Dropping Problem (MCM + BS)", "Partition Array for Maximum Sum"]
      },
      {
        id: "16.8", name: "DP on Squares / Rectangles",
        difficulty: "advanced",
        problems: ["Maximal Rectangle with All 1s", "Count Square Submatrices with All Ones"]
      }
    ]
  },
  {
    id: 17,
    title: "Tries",
    description: "Learn Trie data structure and solve problems.",
    difficulty: "advanced",
    estimatedHours: 8,
    topics: [
      {
        id: "17.1", name: "Theory and Problems",
        difficulty: "advanced",
        problems: ["Implement Trie (Insert, Search, StartsWith)", "Implement Trie II (CountWordsEqualTo, CountWordsStartingWith, Erase)", "Longest String with All Prefixes (Complete String)", "Number of Distinct Substrings in a String", "Bitwise Maximum XOR of Two Numbers in Array", "Maximum XOR With an Element From Array"]
      }
    ]
  },
  {
    id: 18,
    title: "Strings — Advanced",
    description: "Learn advanced string matching algorithms.",
    difficulty: "advanced",
    estimatedHours: 10,
    topics: [
      {
        id: "18.1", name: "Advanced String Algorithms",
        difficulty: "advanced",
        problems: ["Z-Algorithm / Z-Function", "KMP Algorithm (Knuth-Morris-Pratt)", "Compute LPS Array", "Longest Happy Prefix", "Rabin-Karp Algorithm", "Count Palindromic Substrings (Manacher's)", "Shortest Palindrome"]
      }
    ]
  },
  {
    id: 19,
    title: "Advanced Graphs",
    description: "Explore advanced graph algorithms for competitive programming.",
    difficulty: "advanced",
    estimatedHours: 10,
    topics: [
      {
        id: "19.1", name: "Advanced Graph Algorithms",
        difficulty: "advanced",
        problems: ["Strongly Connected Components (Kosaraju's Review)", "Eulerian Path and Circuit", "Maximum Flow — Ford-Fulkerson", "Bipartite Matching — Hopcroft-Karp", "Heavy-Light Decomposition Basics", "Centroid Decomposition Basics"]
      }
    ]
  }
];

// Compute total problems
const totalProblems = dsaSheet.reduce((sum, step) =>
  sum + step.topics.reduce((tSum, topic) => tSum + topic.problems.length, 0), 0
);

const totalTopics = dsaSheet.reduce((sum, step) => sum + step.topics.length, 0);

export { dsaSheet, totalProblems, totalTopics };
