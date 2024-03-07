### Why do we need these components?

At it's current state the Draftbit builder has a single interface for setting the styles of a component. With these scrollable components, there are 2 style props `style` and `contentContainerStyle`. To simplify the codegen on the draftbit side and hide the complexity from the user, these components take a single style and distrubte them across both style props appropriately.
