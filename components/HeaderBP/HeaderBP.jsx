export function HeaderBP({bp0, bArea}) {
  return (
    <>
      <div className="flex gap-[1rem] justify-start items-center">
        <h4 className="font-bold">{bp0}</h4>
        <div className="text-xs px-4 py-1 bg-Teal/7 rounded-md text-Teal/1">{bArea}</div>
      </div>
    </>
  );
}
