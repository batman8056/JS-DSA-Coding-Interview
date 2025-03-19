# 📚 Data Structures and Algorithms in JavaScript

This repository contains comprehensive notes and code examples on **Data Structures** and **Algorithms** in JavaScript. It covers fundamental concepts, problem-solving techniques, and implementation of various algorithms and data structures to help you ace coding interviews and become a better developer.

---

## 🚀 **Table of Contents**
1. [Big O Notation](#big-o-notation)  
2. [Analyzing Performance of Arrays and Objects](#analyzing-performance-of-arrays-and-objects)  
3. [Problem Solving Approach](#problem-solving-approach)  
4. [Problem Solving Patterns](#problem-solving-patterns)  
5. [Recursion](#recursion)  
6. [Searching Algorithms](#searching-algorithms)  
   - Bubble Sort  
   - Selection Sort  
   - Insertion Sort  
   - Merge Sort  
   - Quick Sort  
   - Radix Sort  
7. [Introduction to Data Structures](#introduction-to-data-structures)  
   - Singly Linked List  
   - Doubly Linked List  
   - Stacks and Queues  
   - Binary Search Trees  
   - Tree Traversal  
   - Binary Heaps  
   - Hash Tables  
   - Graphs  
   - Graph Traversal  
   - Dijkstra's Algorithm  

---

## 📈 **Big O Notation**
- Big O notation describes the **time complexity** and **space complexity** of an algorithm.  
- Helps evaluate how an algorithm's performance scales with input size.  
- **Common Big O complexities:**  
  - `O(1)` → Constant time  
  - `O(log n)` → Logarithmic time  
  - `O(n)` → Linear time  
  - `O(n²)` → Quadratic time  
  - `O(2ⁿ)` → Exponential time  

---

## 📊 **Analyzing Performance of Arrays and Objects**
### ✅ Arrays
- Indexed collections of data.  
- **Access** – `O(1)`  
- **Insertion/Deletion** – `O(n)`  
- **Search** – `O(n)`  

### ✅ Objects
- Unordered collections of key-value pairs.  
- **Access** – `O(1)`  
- **Insertion/Deletion** – `O(1)`  
- **Search** – `O(n)`  

---

## 🔎 **Problem Solving Approach**
1. **Understand the problem** – Clarify the input and output.  
2. **Explore examples** – Try different test cases.  
3. **Break down the problem** – Simplify and tackle it step-by-step.  
4. **Plan a solution** – Outline the approach.  
5. **Execute** – Write the code.  
6. **Test and refine** – Handle edge cases and optimize.  

---

## 🧠 **Problem Solving Patterns**
- **Frequency Counter Pattern** – Use an object to count frequency of values.  
- **Two Pointer Pattern** – Use two pointers to iterate through an array.  
- **Sliding Window Pattern** – Create a window over a data set and slide it to find a solution.  
- **Divide and Conquer** – Split the problem into smaller subproblems.  
- **Recursion** – Break down problems using self-referential calls.  

---

## 🔁 **Recursion**
- A function that calls itself until it reaches a **base case**.  
- **Example:**  
```javascript
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
```

---

## 🔍 Searching Algorithms
🔸 Bubble Sort  
Repeatedly swaps adjacent elements if they are in the wrong order.  
**Time Complexity:** O(n²)  
**Space Complexity:** O(1)  

🔸 Selection Sort  
Finds the smallest element and swaps it with the first unsorted element.  
**Time Complexity:** O(n²)  
**Space Complexity:** O(1)  

🔸 Insertion Sort  
Builds the final sorted array one item at a time.  
**Time Complexity:** O(n²)  
**Space Complexity:** O(1)  

🔸 Merge Sort  
Divide and conquer algorithm.  
**Time Complexity:** O(n log n)  
**Space Complexity:** O(n)  

🔸 Quick Sort  
Picks a pivot and partitions the array.  
**Time Complexity:** O(n log n)  
**Space Complexity:** O(log n)  

🔸 Radix Sort  
Non-comparative integer sorting algorithm.  
**Time Complexity:** O(nk)  
**Space Complexity:** O(n + k)  

---

## 🌳 Introduction to Data Structures
✅ **Singly Linked List**  
A linear collection of elements with pointers to the next element.  
**Operations:** Insert, Delete, Search  
**Time Complexity:** O(n)  

✅ **Doubly Linked List**  
Similar to a singly linked list, but each element points to both the next and previous element.  
**Time Complexity:** O(n)  

✅ **Stacks and Queues**  
**Stack:** Last In, First Out (LIFO)  
**Queue:** First In, First Out (FIFO)  
**Time Complexity:** O(1) for insertion and removal  

✅ **Binary Search Trees**  
Each node has at most two children.  
Left child ≤ Parent ≤ Right child.  
**Time Complexity:** O(log n) (average)  

✅ **Tree Traversal**  
**Breadth-First Search (BFS)** – Level order traversal  
**Depth-First Search (DFS)** – Preorder, Inorder, Postorder  

✅ **Binary Heaps**  
Complete binary tree where the parent is greater (max heap) or smaller (min heap) than the children.  
**Use Cases:** Priority Queues  

✅ **Hash Tables**  
Key-value pairs stored using a hash function.  
**Average Time Complexity:** O(1)  

✅ **Graphs**  
A set of nodes (vertices) connected by edges.  
**Types:** Directed, Undirected, Weighted, Unweighted  

✅ **Graph Traversal**  
**Breadth-First Search (BFS)**  
**Depth-First Search (DFS)**  

✅ **Dijkstra's Algorithm**  
Finds the shortest path between two nodes in a weighted graph.  
**Time Complexity:** O((V + E) log V)  
**V →** Number of vertices  
**E →** Number of edges

