# RCS
Reactive Component System

# Design
There are two approaches:
- Manage entities and systems are under C++, actual scripting on js, jobs are C++
    - ?: What if?
    - ?: Could I make syntax of jobs quite easy? Or just C++ (maybe it's ok for first version)?
    - ?: Woudn't data mapping from C++ to js take too long and too much memory?
    - ?: Could I run read-only js in parallel? (and any reason? :)
- Entity manager and system manager are under js, jobs are C++

# Design
RCS generates node.js addon project and builds it by `node-gyp` (my cross-platform hack).

RCS is C++ project, so there will be only callbacks written in JS.

## JS actions:
 - ComponentSystemUpdate

## JS API
- EntityManager
    - setComponent(Type: Function, entity: Object, component: Object)
    - unsetComponent(Type: Function, entity: Object)
- SystemManager
    - addSystem(system: Object)
    - setGroup(group: Object)
    - getGroup(groupId: string): group: Object

# Conclusion
Unfirtunatelly, there is no way to make JS *really multithreading*.
I mean, there are web workers, node.js processes etc - but all of them don't give me what I need.

Under *reall multithreading* I mean cross-process communications. All available JS thread realizations need to much time for communication.
For example, sending an empty message to worker thread cost about ~15ms (my machine could be slow - but the same task takes less then 1ms in C++).

So, accordingly to the data above, I've made decision to try generate come C++ code for Node.js users to make all data manipulation on C++ layer and call JS only on system update.

# Components
You should describe your components in `.cpp` files. And they should be plain `C++ structures`. RCS will generate typings `.cpp.d.ts` to allow you import it directly to you js. Or not? How will I handle imports then?
I guess I should write a sample project to see how could I use it from js.

Questions:
 - How to store shared data?
    - How to describe it in C++?


