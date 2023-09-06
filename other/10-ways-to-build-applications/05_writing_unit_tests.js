describe("Folder.addChild()", () => {
    it("when adding an existing folder should not add duplicate", () => {
        var root = new Folder("root");
        var child = new Folder("child");

        root.addChild(child);
        root.addChild(child);

        expect(root.children.length).toBe(1);
    });
});
